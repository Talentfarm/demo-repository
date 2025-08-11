import React, { useState, useEffect } from 'react';
import { getWeatherStatus } from '../api/backendApi';

const WeatherStatus = ({ farmerId, location }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!location) return;
        
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherStatus();
            setWeather(data);
        } catch (err) {
            console.error('Weather fetch error:', err);
            setError(err.message || 'Failed to load weather data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [location]);

    const refreshWeather = () => {
        fetchWeather();
    };

    if (loading) return <div className="loading">Loading weather data...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!weather) return <div>No weather data available</div>;

    return (
        <div className="weather-status">
            <div className="weather-header">
                <h3>Current Weather Conditions</h3>
                <button onClick={refreshWeather} className="refresh-btn">
                    Refresh
                </button>
            </div>
            
            <div className="current-conditions">
                <div className="weather-icon">
                    <img 
                        src={`https://openweathermap.org/img/wn/${weather.current.icon}@2x.png`} 
                        alt={weather.current.conditions}
                    />
                    <span>{weather.current.temp}°C</span>
                </div>
                <div className="weather-details">
                    <p><strong>Conditions:</strong> {weather.current.conditions}</p>
                    <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    <p><strong>Wind:</strong> {weather.current.windSpeed} m/s</p>
                    {weather.current.rainfall > 0 && (
                        <p><strong>Rainfall (last hour):</strong> {weather.current.rainfall} mm</p>
                    )}
                </div>
            </div>

            {weather.alerts && (
                <div className="weather-alerts">
                    <h4>Alerts</h4>
                    {weather.alerts.map((alert, index) => (
                        <div key={index} className={`alert ${alert.severity}`}>
                            {alert.message}
                        </div>
                    ))}
                </div>
            )}

            <div className="risk-factors">
                <h4>Risk Assessment</h4>
                <div className="risk-meter">
                    <label>Drought Risk:</label>
                    <progress value={weather.riskFactors.droughtRisk} max="1"></progress>
                    <span>{Math.round(weather.riskFactors.droughtRisk * 100)}%</span>
                </div>
                <div className="risk-meter">
                    <label>Flood Risk:</label>
                    <progress value={weather.riskFactors.floodRisk} max="1"></progress>
                    <span>{Math.round(weather.riskFactors.floodRisk * 100)}%</span>
                </div>
                <div className="risk-meter">
                    <label>Crop Stress:</label>
                    <progress value={weather.riskFactors.cropStress} max="1"></progress>
                    <span>{Math.round(weather.riskFactors.cropStress * 100)}%</span>
                </div>
            </div>

            <p className="last-updated">
                Last updated: {new Date(weather.lastUpdated).toLocaleString()}
            </p>
        </div>
    );
};

export default WeatherStatus;