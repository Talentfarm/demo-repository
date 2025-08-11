import React, { useState, useEffect } from 'react';

const WeatherDemo = () => {
    const [weather, setWeather] = useState(null);
    const [evaluation, setEvaluation] = useState(null);
    const [scenarios, setScenarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch current weather data
    const fetchWeather = async () => {
        try {
            const response = await fetch('/api/demo/weather');
            const data = await response.json();
            setWeather(data.weather);
            setEvaluation(data.evaluation);
            setMessage(data.message);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    // Fetch available scenarios
    const fetchScenarios = async () => {
        try {
            const response = await fetch('/api/demo/weather/scenarios');
            const data = await response.json();
            setScenarios(data.scenarios);
        } catch (error) {
            console.error('Error fetching scenarios:', error);
        }
    };

    // Change weather scenario
    const changeScenario = async (scenarioId) => {
        setLoading(true);
        try {
            const response = await fetch('/api/demo/weather/scenario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ scenario: scenarioId }),
            });
            const data = await response.json();
            
            if (data.success) {
                await fetchWeather(); // Refresh weather data
                alert(`Weather changed to: ${data.weather.scenario}`);
            }
        } catch (error) {
            console.error('Error changing scenario:', error);
        }
        setLoading(false);
    };

    // Trigger payout
    
const getActivePolicyId = async () => {
  try {
   
    const response = await fetch('/api/policies'); 
    const data = await response.json();
    
    if (data.success && data.policies && data.policies.length > 0) {
     
      const activePolicy = data.policies.find(p => p.isAccepted && !p.isPaid);
      return activePolicy ? activePolicy.id : 2; 
    }
    
    return 2; 
  } catch (error) {
    console.error('Error getting active policy:', error);
    return 2; 
  }
};


const triggerPayout = async () => {
  if (!weather?.evaluation?.shouldTriggerPayout) {
    alert('Current weather conditions do not warrant payout');
    return;
  }

  const confirmPayout = window.confirm(
    `Are you sure you want to trigger payout?\n\nReason: ${weather.evaluation.reason}\nAmount: 10 ETH will be sent to farmer's wallet`
  );

  if (!confirmPayout) return;

  setLoading(true);
  try {
    
    const policyId = await getActivePolicyId();
    
    const response = await fetch(`/api/demo/trigger-payout/${policyId}`, {
      method: 'POST'
    });
    
    const data = await response.json();
    if (data.success) {
      alert(`✅ PAYOUT SUCCESSFUL!\n\nReason: ${data.reason}\nAmount: 10 ETH sent to farmer\nTransaction Hash: ${data.transaction.transactionHash}`);
    } else {
      alert(`❌ Payout failed: ${data.error}`);
    }
  } catch (error) {
    console.error('Error triggering payout:', error);
    alert('Error triggering payout');
  }
  setLoading(false);
};


    useEffect(() => {
        fetchWeather();
        fetchScenarios();
    }, []);

    if (!weather) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>🌤️ Crop Insurance Weather Demo</h2>
            
            {/* Current Weather Display */}
            <div style={{ 
                border: '2px solid #ddd', 
                borderRadius: '10px', 
                padding: '20px', 
                marginBottom: '20px',
                backgroundColor: evaluation?.shouldTriggerPayout ? '#ffebee' : '#f1f8e9'
            }}>
                <h3>Current Weather - {weather.location}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>🌡️ Temperature: {weather.temperature}°C</div>
                    <div>🌧️ Rainfall: {weather.rainfall}mm</div>
                    <div>💨 Wind Speed: {weather.windSpeed}km/h</div>
                    <div>💧 Humidity: {weather.humidity}%</div>
                </div>
                <p><strong>Description:</strong> {weather.description}</p>
                <p><strong>Status:</strong> {message}</p>
            </div>

            {/* Evaluation Results */}
            {evaluation && (
                <div style={{ 
                    border: '2px solid #ddd', 
                    borderRadius: '10px', 
                    padding: '15px', 
                    marginBottom: '20px',
                    backgroundColor: evaluation.shouldTriggerPayout ? '#ffcdd2' : '#c8e6c9'
                }}>
                    <h4>Insurance Evaluation</h4>
                    <p><strong>Payout Required:</strong> {evaluation.shouldTriggerPayout ? '✅ YES' : '❌ NO'}</p>
                    <p><strong>Reason:</strong> {evaluation.reason}</p>
                    <p><strong>Severity:</strong> {evaluation.severity}</p>
                </div>
            )}

            {/* Scenario Buttons */}
            <div style={{ marginBottom: '20px' }}>
                <h4>Change Weather Scenario:</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {scenarios.map((scenario) => (
                        <button
                            key={scenario.id}
                            onClick={() => changeScenario(scenario.id)}
                            disabled={loading}
                            style={{
                                padding: '10px 15px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#2196F3',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            {scenario.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Payout Button */}
            {evaluation?.shouldTriggerPayout && (
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={triggerPayout}
                        disabled={loading}
                        style={{
                            padding: '15px 30px',
                            fontSize: '18px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        💸 TRIGGER INSURANCE PAYOUT
                    </button>
                </div>
            )}

            {loading && <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>}
        </div>
    );
};

export default WeatherDemo;