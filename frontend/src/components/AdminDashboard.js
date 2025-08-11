import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

export default function AdminDashboard() {
  const [policies, setPolicies] = useState([]);
  const [scenarios, setScenarios] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [cropWeatherChecks, setCropWeatherChecks] = useState({});
  const getAuthToken = () => localStorage.getItem('token');

  const fetchPolicies = async () => {
    const token = getAuthToken();
    const res = await fetch('http://localhost:5000/api/admin/policies', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setPolicies(data);

    let checks = {};
    for (let p of data) {
      const evalRes = await fetch(
        `http://localhost:5000/api/demo/weather/evaluate/${p.cropType}`
      );
      checks[p.policyId] = await evalRes.json();
    }
    setCropWeatherChecks(checks);
  };

  const fetchScenarios = async () => {
    const res = await fetch('http://localhost:5000/api/demo/weather/scenarios');
    const data = await res.json();
    setScenarios(data.scenarios);
  };

  const fetchWeather = async () => {
    const res = await fetch('http://localhost:5000/api/demo/weather');
    const data = await res.json();
    setCurrentWeather(data.weather);
  };

  const changeScenario = async (scenario) => {
    await fetch('http://localhost:5000/api/demo/weather/scenario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ scenario })
    });
    await fetchWeather();
    await fetchPolicies();
  };

  const triggerPayout = async (policyId) => {
    const token = getAuthToken();
    const res = await fetch(
      `http://localhost:5000/api/admin/trigger-payout/${policyId}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    const data = await res.json();
    if (!res.ok) return alert(data.message);
    alert(`Payout successful! Tx: ${data.transaction}`);
    fetchPolicies();
  };

  useEffect(() => {
    fetchWeather();
    fetchPolicies();
    fetchScenarios();
  }, []);

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <h2>Admin Dashboard – Guntur Region</h2>
        <Link to="/create-policy" className="btn btn-primary">
          + Create New Policy
        </Link>
      </div>

      {/* Weather Card */}
      {currentWeather && (
        <div className="card weather-card">
          <h4>🌤 Current Weather</h4>
          <p>
            <b>Scenario:</b> {currentWeather.scenario}
          </p>
          <p>{currentWeather.description}</p>
          <div className="weather-stats">
            <span>🌡 {currentWeather.temperature}°C</span>
            <span>🌧 {currentWeather.rainfall}mm</span>
            <span>💨 {currentWeather.windSpeed}km/h</span>
            <span>💧 {currentWeather.humidity}%</span>
          </div>
        </div>
      )}

      {/* Scenario Buttons */}
      <div className="card">
        <h4>Change Weather Scenario:</h4>
        <div className="scenario-buttons">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => changeScenario(s.id)}
              className="scenario-btn"
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Policies Table */}
      <div className="card">
        <h3>📄 Policies</h3>
        <table className="app-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Farmer</th>
              <th>Crop</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((p) => (
              <tr key={p.policyId}>
                <td>{p.policyId}</td>
                <td>{p.farmer?.name}</td>
                <td>{p.cropType}</td>
                <td>
                  <span
                    className={`status ${
                      p.isPaid
                        ? 'status-paid'
                        : p.isAccepted
                        ? 'status-active'
                        : 'status-pending'
                    }`}
                  >
                    {p.isPaid
                      ? 'Paid'
                      : p.isAccepted
                      ? 'Accepted'
                      : 'Pending'}
                  </span>
                </td>
                <td>
                  {p.isAccepted &&
                    !p.isPaid &&
                    cropWeatherChecks[p.policyId]?.shouldTriggerPayout && (
                      <button
                        className="btn btn-danger"
                        onClick={() => triggerPayout(p.policyId)}
                      >
                        Trigger Payout
                      </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
