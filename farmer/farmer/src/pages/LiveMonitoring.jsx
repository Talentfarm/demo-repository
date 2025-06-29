import React from "react";

export default function LiveMonitoring() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📈 Live Crop Monitoring</h2>
      <p>Real-time data powered by satellite and IoT devices.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <h4>🌾 Crop Health Index: 87%</h4>
        <h4>🌧️ Rainfall Forecast: Moderate showers expected in next 48 hours</h4>
        <h4>🌡️ Temperature: 31°C | Humidity: 68%</h4>
      </div>

      <div style={{ marginTop: "1.5rem", background: "#e0f7fa", padding: "1rem", borderRadius: "8px" }}>
        <p><strong>Alert:</strong> Excess soil moisture detected in your paddy field. Consider drainage solutions.</p>
      </div>
    </div>
  );
}
