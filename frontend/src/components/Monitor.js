import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Monitor = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [farmerData, setFarmerData] = useState(null);
    const [manualLocation, setManualLocation] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Get user data from localStorage
        try {
            const userString = localStorage.getItem('user');
            if (userString && userString !== 'undefined') {
                const userData = JSON.parse(userString);
                setUser(userData);
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }, []);

    useEffect(() => {
        if (!user) return;

        // Get farmer data from localStorage
        try {
            const adminDataString = localStorage.getItem('adminCsvData');
            let adminData = [];
            
            if (adminDataString && adminDataString !== 'undefined') {
                adminData = JSON.parse(adminDataString).data || [];
            }

            const farmerSpecificData = adminData.find(row => {
                const nameColumn = Object.keys(row).find(
                    key => key.toLowerCase() === 'name'
                );
                return nameColumn && 
                       row[nameColumn] && 
                       user.username &&
                       row[nameColumn].toString().trim().toLowerCase() === 
                       user.username.toString().trim().toLowerCase();
            });

            setFarmerData(farmerSpecificData);
        } catch (error) {
            console.error('Error loading farmer data:', error);
        }
    }, [user]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Get location from farmer data - check multiple possible field names
                if (!farmerData) {
                    throw new Error('Policy data not available. Please ensure you have an active policy.');
                }

                // Debug: log farmer data to see what fields are available
                console.log('Farmer data fields:', Object.keys(farmerData));
                console.log('Full farmer data:', farmerData);

                // Try to find location field with your actual CSV column names
                const locationFields = [
                    'District', 'district', 'DISTRICT',
                    'Village', 'village', 'VILLAGE',
                    'State', 'state', 'STATE',
                    'location', 'Location', 'LOCATION', 
                    'address', 'Address', 'city', 'City'
                ];
                
                let location = null;
                
                // First try to use District + State combination for better accuracy
                const district = farmerData['District'] || farmerData['district'];
                const state = farmerData['State'] || farmerData['state'];
                
                if (district && state) {
                    location = `${district}, ${state}`;
                } else if (district) {
                    location = district;
                } else if (state) {
                    location = state;
                } else {
                    // Fallback to other location fields
                    for (const field of locationFields) {
                        if (farmerData[field] && farmerData[field].toString().trim()) {
                            location = farmerData[field].toString().trim();
                            break;
                        }
                    }
                }

                if (!location) {
                    // List available fields for debugging
                    const availableFields = Object.keys(farmerData).join(', ');
                    throw new Error(`Location data not found. Available fields: ${availableFields}. Please ensure your policy includes location information. Looking for: District, Village, State`);
                }

                console.log('Using location:', location);
                
                // Use your OpenWeather API key - FIXED VERSION
                const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || '429646c02d989ef27893cfed8945c412';
                
                // Remove the problematic check - just use the API key
                if (!API_KEY) {
                    throw new Error('OpenWeather API key not configured.');
                }
                
                const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
                
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Invalid API key. Please check your OpenWeather API key.');
                    } else if (response.status === 404) {
                        throw new Error(`Weather data not found for location: ${location}. Please check the location name.`);
                    } else {
                        throw new Error(`Weather API error: ${response.status}`);
                    }
                }
                
                const weatherData = await response.json();
                
                // Transform the data to match our expected format
                const transformedData = {
                    current: {
                        temp: Math.round(weatherData.main.temp),
                        conditions: weatherData.weather[0].description,
                        humidity: weatherData.main.humidity,
                        windSpeed: weatherData.wind.speed,
                        rainfall: weatherData.rain ? weatherData.rain['1h'] || 0 : 0,
                        icon: weatherData.weather[0].icon
                    },
                    alerts: generateWeatherAlerts(weatherData),
                    lastUpdated: new Date().toISOString(),
                    location: weatherData.name
                };
                
                setWeather(transformedData);
            } catch (err) {
                console.error('Weather API Error:', err);
                setError(err.message || 'Failed to load weather data');
                
                // Set mock weather data as fallback
                setWeather(getMockWeatherData());
            } finally {
                setLoading(false);
            }
        };

        // Only fetch weather if we have farmer data
        if (farmerData) {
            fetchWeatherData();
        } else if (user) {
            // If we have user but no farmer data, still set loading to false
            setLoading(false);
            setError('Policy data not found. Please ensure you have an active policy.');
        }
    }, [farmerData, user]);

    // Function to fetch weather with manual location
    const fetchWeatherWithManualLocation = async () => {
        if (!manualLocation.trim()) {
            alert('Please enter a location');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            // FIXED: Use the same API key logic
            const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || '429646c02d989ef27893cfed8945c412';
            
            if (!API_KEY) {
                throw new Error('OpenWeather API key not configured.');
            }
            
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${manualLocation.trim()}&appid=${API_KEY}&units=metric`;
            
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Invalid API key. Please check your OpenWeather API key.');
                } else if (response.status === 404) {
                    throw new Error(`Weather data not found for location: ${manualLocation}. Please check the location name.`);
                } else {
                    throw new Error(`Weather API error: ${response.status}`);
                }
            }
            
            const weatherData = await response.json();
            
            const transformedData = {
                current: {
                    temp: Math.round(weatherData.main.temp),
                    conditions: weatherData.weather[0].description,
                    humidity: weatherData.main.humidity,
                    windSpeed: weatherData.wind.speed,
                    rainfall: weatherData.rain ? weatherData.rain['1h'] || 0 : 0,
                    icon: weatherData.weather[0].icon
                },
                alerts: generateWeatherAlerts(weatherData),
                lastUpdated: new Date().toISOString(),
                location: weatherData.name
            };
            
            setWeather(transformedData);
            setError(null);
        } catch (err) {
            console.error('Manual Weather API Error:', err);
            setError(err.message || 'Failed to load weather data');
        } finally {
            setLoading(false);
        }
    };

    // Generate weather alerts based on weather conditions
    const generateWeatherAlerts = (weatherData) => {
        const alerts = [];
        const temp = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const windSpeed = weatherData.wind.speed;
        const condition = weatherData.weather[0].main.toLowerCase();
        
        // Temperature alerts
        if (temp > 35) {
            alerts.push({
                severity: 'high',
                message: 'High temperature alert: Extreme heat may affect crop health. Consider irrigation.'
            });
        } else if (temp < 5) {
            alerts.push({
                severity: 'high',
                message: 'Low temperature alert: Risk of frost damage. Protect sensitive crops.'
            });
        }
        
        // Humidity alerts
        if (humidity > 80) {
            alerts.push({
                severity: 'medium',
                message: 'High humidity: Increased risk of fungal diseases. Monitor crop health.'
            });
        } else if (humidity < 30) {
            alerts.push({
                severity: 'medium',
                message: 'Low humidity: Crops may need additional watering.'
            });
        }
        
        // Wind alerts
        if (windSpeed > 10) {
            alerts.push({
                severity: 'medium',
                message: 'Strong winds detected: Risk of crop damage. Secure loose materials.'
            });
        }
        
        // Weather condition alerts
        if (condition.includes('rain') || condition.includes('storm')) {
            alerts.push({
                severity: 'medium',
                message: 'Precipitation detected: Monitor for flooding and ensure proper drainage.'
            });
        }
        
        if (condition.includes('drought') || (temp > 30 && humidity < 40)) {
            alerts.push({
                severity: 'high',
                message: 'Drought conditions: Increase irrigation and monitor soil moisture.'
            });
        }
        
        // If no alerts, add a positive message
        if (alerts.length === 0) {
            alerts.push({
                severity: 'low',
                message: 'Weather conditions are favorable for crops.'
            });
        }
        
        return alerts;
    };

    // Mock weather data for fallback
    const getMockWeatherData = () => {
        return {
            current: {
                temp: 28,
                conditions: 'Partly Cloudy',
                humidity: 65,
                windSpeed: 3.2,
                rainfall: 0,
                icon: '02d'
            },
            alerts: [
                {
                    severity: 'low',
                    message: 'Weather conditions are favorable for crops'
                }
            ],
            lastUpdated: new Date().toISOString(),
            location: 'Sample Location'
        };
    };

    if (loading) return <div className="loading">Loading monitoring data...</div>;

    return (
        <div className="monitor-container">
            <div className="policy-section">
                <h2>Policy Monitoring</h2>
                
                {farmerData && (
                    <div className="farmer-info">
                        <h3>Your Policy Information</h3>
                        <div className="policy-details">
                            {Object.entries(farmerData).map(([key, value]) => (
                                <div key={key} className="detail-row">
                                    <strong>{key}:</strong> <span>{value || '-'}</span>
                                </div>
                            ))}
                        </div>
                        <div className="debug-info" style={{marginTop: '10px', padding: '10px', background: '#f0f0f0', fontSize: '12px'}}>
                            <strong>Debug Info:</strong> Available fields: {Object.keys(farmerData).join(', ')}
                        </div>
                    </div>
                )}
                
                <div className="policy-instructions">
                    <h3>Policy Instructions</h3>
                    <div className="instruction-card">
                        <h4>Claim Process</h4>
                        <ol>
                            <li>Report damage within 48 hours of weather event</li>
                            <li>Document damage with photos/videos</li>
                            <li>Submit claim through our portal</li>
                            <li>Wait for assessor's visit</li>
                        </ol>
                    </div>
                    
                    <div className="instruction-card">
                        <h4>Coverage Details</h4>
                        <ul>
                            <li>Drought coverage: 70% of losses</li>
                            <li>Flood coverage: 85% of losses</li>
                            <li>Hail damage: 90% of losses</li>
                            <li>Excessive rain: 80% of losses</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="weather-section">
                <h3>Weather Impact Analysis</h3>
                
                {error && (
                    <div className="error-message">
                        <p><strong>Weather Service Error:</strong> {error}</p>
                        <p><small>You can try entering a location manually below or showing sample weather data</small></p>
                        
                        <div className="manual-location" style={{margin: '15px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '5px'}}>
                            <h4>Try Manual Location Entry:</h4>
                            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                                <input
                                    type="text"
                                    value={manualLocation}
                                    onChange={(e) => setManualLocation(e.target.value)}
                                    placeholder="Enter city name (e.g., Mumbai, Delhi, Bangalore)"
                                    style={{flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
                                    onKeyPress={(e) => e.key === 'Enter' && fetchWeatherWithManualLocation()}
                                />
                                <button 
                                    onClick={fetchWeatherWithManualLocation}
                                    disabled={loading}
                                    style={{padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
                                >
                                    {loading ? 'Loading...' : 'Get Weather'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
                {weather ? (
                    <>
                        <div className="current-weather">
                            <div className="weather-header">
                                <h4>Current Conditions - {weather.location}</h4>
                                <span className="update-time">
                                    Updated: {new Date(weather.lastUpdated).toLocaleTimeString()}
                                </span>
                            </div>
                            <div className="weather-card">
                                <div className="weather-icon">
                                    <img 
                                        src={`https://openweathermap.org/img/wn/${weather.current.icon}@2x.png`} 
                                        alt={weather.current.conditions}
                                    />
                                    <span>{weather.current.temp}°C</span>
                                </div>
                                <div className="weather-details">
                                    <p><strong>Condition:</strong> {weather.current.conditions}</p>
                                    <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                                    <p><strong>Wind:</strong> {weather.current.windSpeed} m/s</p>
                                    {weather.current.rainfall > 0 && (
                                        <p><strong>Rainfall:</strong> {weather.current.rainfall} mm (last hour)</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="weather-alerts">
                            <h4>Risk Assessment</h4>
                            {weather.alerts && weather.alerts.length > 0 ? (
                                weather.alerts.map((alert, index) => (
                                    <div key={index} className={`alert ${alert.severity}`}>
                                        {alert.message}
                                    </div>
                                ))
                            ) : (
                                <p className="no-alerts">No significant weather risks detected</p>
                            )}
                        </div>
                    </>
                ) : (
                    <p>Weather data not available</p>
                )}
            </div>

            <div className="monitor-actions">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Back to Dashboard
                </button>
                <button 
                    onClick={() => window.location.reload()} 
                    className="refresh-button"
                >
                    Refresh Data
                </button>
            </div>
        </div>
    );
};

export default Monitor;