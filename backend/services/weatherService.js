const axios = require('axios');
require('dotenv').config();

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const OPENWEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

const { Policy, Farmer } = require('../models');
const { triggerPayoutOnBlockchain } = require('./blockchainService');

// Enhanced district coordinates with more locations
const DISTRICT_COORDINATES = {
    'Guntur': { lat: 16.3045, lon: 80.4435 },
    'Prakasam': { lat: 15.75, lon: 79.98 },
    'Namburu': { lat: 16.3533, lon: 80.4590 },
    'Vijayawada': { lat: 16.5062, lon: 80.6480 },
    'Machilipatnam': { lat: 16.1872, lon: 81.1383 },
    'Ongole': { lat: 15.5057, lon: 80.0499 },
    'Chilakaluripet': { lat: 16.0890, lon: 80.1663 },
    'Tenali': { lat: 16.2393, lon: 80.6460 }
};

// Payout conditions for different insurance types
const PAYOUT_CONDITIONS = {
    drought: {
        minTemp: 35,
        maxHumidity: 30,
        minConsecutiveDays: 3
    },
    excessive_rain: {
        minRainfall: 50, // mm in 24 hours
        minConsecutiveDays: 2
    },
    flood: {
        minRainfall: 100, // mm in 24 hours
        windSpeed: 15 // m/s
    },
    hail: {
        // Would need weather alerts/warnings from API
        checkWeatherAlerts: true
    }
};

class WeatherService {
    constructor() {
        this.cache = new Map();
        this.cacheTimeout = 10 * 60 * 1000; // 10 minutes
    }

    async getCurrentWeather(lat, lon) {
        const cacheKey = `${lat},${lon}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
            return cached.data;
        }

        try {
            const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather`, {
                params: {
                    lat,
                    lon,
                    appid: OPENWEATHER_API_KEY,
                    units: 'metric'
                },
                timeout: 10000
            });

            const data = response.data;
            this.cache.set(cacheKey, { data, timestamp: Date.now() });
            return data;
        } catch (error) {
            console.error(`Error fetching weather for ${lat},${lon}:`, error.message);
            // Return cached data if available, even if expired
            if (cached) {
                console.log('Using expired cache due to API error');
                return cached.data;
            }
            throw error;
        }
    }

    async getHistoricalWeather(lat, lon, daysBack = 5) {
        const promises = [];
        const now = Math.floor(Date.now() / 1000);
        
        for (let i = 1; i <= daysBack; i++) {
            const timestamp = now - (i * 24 * 60 * 60);
            promises.push(
                axios.get(`${OPENWEATHER_BASE_URL}/onecall/timemachine`, {
                    params: {
                        lat,
                        lon,
                        dt: timestamp,
                        appid: OPENWEATHER_API_KEY,
                        units: 'metric'
                    }
                }).catch(err => {
                    console.error(`Error fetching historical weather for day ${i}:`, err.message);
                    return null;
                })
            );
        }

        const results = await Promise.all(promises);
        return results.filter(r => r !== null).map(r => r.data);
    }

    async getDashboardWeather(lat, lon) {
        try {
            const [current, historical] = await Promise.all([
                this.getCurrentWeather(lat, lon),
                this.getHistoricalWeather(lat, lon, 5)
            ]);
            
            const riskFactors = {
                droughtRisk: this.calculateDroughtRisk(current, historical),
                floodRisk: this.calculateFloodRisk(current, historical),
                cropStress: this.calculateCropStress(current, historical)
            };
            
            return {
                current: {
                    temp: current.main.temp,
                    humidity: current.main.humidity,
                    conditions: current.weather[0].main,
                    description: current.weather[0].description,
                    icon: current.weather[0].icon,
                    windSpeed: current.wind.speed,
                    pressure: current.main.pressure,
                    rainfall: current.rain ? current.rain['1h'] || 0 : 0,
                    uvIndex: current.uvi || 0
                },
                alerts: this.generateWeatherAlerts(current),
                riskFactors,
                forecast: await this.getShortForecast(lat, lon),
                lastUpdated: new Date()
            };
        } catch (error) {
            console.error('Dashboard weather error:', error);
            throw new Error('Could not fetch weather data');
        }
    }

    async getShortForecast(lat, lon) {
        try {
            const response = await axios.get(`${OPENWEATHER_BASE_URL}/forecast`, {
                params: {
                    lat,
                    lon,
                    appid: OPENWEATHER_API_KEY,
                    units: 'metric',
                    cnt: 8 // 24 hours (3-hour intervals)
                }
            });

            return response.data.list.map(item => ({
                time: new Date(item.dt * 1000),
                temp: item.main.temp,
                conditions: item.weather[0].main,
                rainfall: item.rain ? item.rain['3h'] || 0 : 0
            }));
        } catch (error) {
            console.error('Forecast error:', error);
            return [];
        }
    }

    calculateDroughtRisk(current, historical) {
        const avgTemp = historical.length > 0 
            ? historical.reduce((sum, day) => sum + day.current.temp, 0) / historical.length 
            : current.main.temp;
        
        const tempScore = Math.max(0, (avgTemp - 30) / 15);
        const humidityScore = (60 - Math.min(60, current.main.humidity)) / 60;
        const rainfallScore = historical.length > 0 
            ? Math.max(0, (10 - this.getAverageRainfall(historical)) / 10) 
            : 0.5;
        
        return Math.min(1, (tempScore * 0.4) + (humidityScore * 0.3) + (rainfallScore * 0.3));
    }

    calculateFloodRisk(current, historical) {
        const currentRain = current.rain ? current.rain['1h'] || 0 : 0;
        const recentRain = historical.length > 0 
            ? this.getAverageRainfall(historical) 
            : 0;
        
        const immediateRisk = Math.min(1, currentRain / 25);
        const cumulativeRisk = Math.min(1, recentRain / 50);
        
        return Math.max(immediateRisk, cumulativeRisk * 0.7);
    }

    calculateCropStress(current, historical) {
        const idealTemp = 25;
        const idealHumidity = 60;
        
        const tempStress = Math.min(1, Math.abs(current.main.temp - idealTemp) / 15);
        const humidityStress = Math.min(1, Math.abs(current.main.humidity - idealHumidity) / 40);
        const windStress = Math.min(1, Math.max(0, (current.wind.speed - 5) / 15));
        
        return Math.min(1, (tempStress * 0.5) + (humidityStress * 0.3) + (windStress * 0.2));
    }

    getAverageRainfall(historical) {
        if (historical.length === 0) return 0;
        
        const totalRain = historical.reduce((sum, day) => {
            const rain = day.current.rain ? day.current.rain['1h'] || 0 : 0;
            return sum + rain;
        }, 0);
        
        return totalRain / historical.length;
    }

    generateWeatherAlerts(weather) {
        const alerts = [];
        
        if (weather.main.temp > 35) {
            alerts.push({
                type: 'high_temp',
                severity: weather.main.temp > 40 ? 'critical' : 'warning',
                message: `High temperature: ${weather.main.temp}°C - Potential crop stress and drought risk`
            });
        }
        
        if (weather.main.temp < 10) {
            alerts.push({
                type: 'low_temp',
                severity: 'warning',
                message: `Low temperature: ${weather.main.temp}°C - Potential frost damage`
            });
        }
        
        const rainfall = weather.rain ? weather.rain['1h'] || 0 : 0;
        if (rainfall > 20) {
            alerts.push({
                type: 'heavy_rain',
                severity: rainfall > 50 ? 'critical' : 'warning',
                message: `Heavy rainfall: ${rainfall}mm/hr - Flooding risk`
            });
        }
        
        if (weather.wind.speed > 15) {
            alerts.push({
                type: 'high_wind',
                severity: weather.wind.speed > 25 ? 'critical' : 'warning',
                message: `High winds: ${weather.wind.speed} m/s - Potential crop damage`
            });
        }
        
        if (weather.main.humidity > 90) {
            alerts.push({
                type: 'high_humidity',
                severity: 'info',
                message: 'Very high humidity - Increased disease risk'
            });
        }
        
        return alerts.length > 0 ? alerts : null;
    }

    async checkPayoutConditions(policy, currentWeather, historicalWeather) {
        const conditions = PAYOUT_CONDITIONS[policy.insuranceType];
        if (!conditions) {
            console.log(`No payout conditions defined for ${policy.insuranceType}`);
            return false;
        }

        switch (policy.insuranceType) {
            case 'drought':
                return this.checkDroughtConditions(currentWeather, historicalWeather, conditions);
            case 'excessive_rain':
                return this.checkExcessiveRainConditions(currentWeather, historicalWeather, conditions);
            case 'flood':
                return this.checkFloodConditions(currentWeather, conditions);
            default:
                return false;
        }
    }

    checkDroughtConditions(current, historical, conditions) {
        const tempCondition = current.main.temp >= conditions.minTemp;
        const humidityCondition = current.main.humidity <= conditions.maxHumidity;
        
        // Check if conditions persisted over multiple days
        const consecutiveDays = historical.filter(day => 
            day.current.temp >= conditions.minTemp && 
            day.current.humidity <= conditions.maxHumidity
        ).length;
        
        return tempCondition && humidityCondition && consecutiveDays >= conditions.minConsecutiveDays;
    }

    checkExcessiveRainConditions(current, historical, conditions) {
        const currentRain = current.rain ? current.rain['1h'] || 0 : 0;
        const totalRain24h = currentRain + this.getAverageRainfall(historical.slice(0, 1)) * 24;
        
        return totalRain24h >= conditions.minRainfall;
    }

    checkFloodConditions(current, conditions) {
        const rainfall = current.rain ? current.rain['1h'] || 0 : 0;
        const windSpeed = current.wind.speed;
        
        return rainfall >= conditions.minRainfall || 
               (rainfall >= conditions.minRainfall * 0.7 && windSpeed >= conditions.windSpeed);
    }

    async checkAndTriggerPayouts() {
        try {
            const policies = await Policy.find({ 
                isPaid: false, 
                isAccepted: true,
                isExpired: false 
            }).populate('farmer');
            
            console.log(`Checking ${policies.length} active policies for payout conditions...`);

            for (const policy of policies) {
                if (!policy.farmer?.district) {
                    console.warn(`Policy ${policy.policyId} skipped: Missing farmer district`);
                    continue;
                }

                const coordinates = DISTRICT_COORDINATES[policy.farmer.district];
                if (!coordinates) {
                    console.warn(`No coordinates for district: ${policy.farmer.district}`);
                    continue;
                }

                try {
                    const [currentWeather, historicalWeather] = await Promise.all([
                        this.getCurrentWeather(coordinates.lat, coordinates.lon),
                        this.getHistoricalWeather(coordinates.lat, coordinates.lon, 5)
                    ]);

                    const shouldPayout = await this.checkPayoutConditions(
                        policy, 
                        currentWeather, 
                        historicalWeather
                    );

                    if (shouldPayout) {
                        console.log(`Payout conditions met for policy ${policy.policyId}`);
                        
                        try {
                            await triggerPayoutOnBlockchain(policy.policyId);
                            await Policy.findByIdAndUpdate(policy._id, { 
                                isPaid: true,
                                payoutDate: new Date(),
                                payoutReason: `${policy.insuranceType} conditions met`
                            });
                            
                            console.log(`✅ Payout processed for policy ${policy.policyId}`);
                        } catch (blockchainError) {
                            console.error(`❌ Blockchain payout failed for policy ${policy.policyId}:`, blockchainError.message);
                        }
                    } else {
                        console.log(`Conditions not met for policy ${policy.policyId}`);
                    }
                } catch (weatherError) {
                    console.error(`Weather data error for policy ${policy.policyId}:`, weatherError.message);
                }
            }
            
            console.log('Weather check cycle completed');
        } catch (error) {
            console.error('Error in payout check process:', error);
        }
    }
}


const weatherService = new WeatherService();

module.exports = {
    getCurrentWeather: (lat, lon) => weatherService.getCurrentWeather(lat, lon),
    getDashboardWeather: (lat, lon) => weatherService.getDashboardWeather(lat, lon),
    checkAndTriggerPayouts: () => weatherService.checkAndTriggerPayouts(),
    getDistrictCoordinates: (district) => DISTRICT_COORDINATES[district] || null
};