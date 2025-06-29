// src/pages/AdminPanel.jsx
import React, { useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [farmers, setFarmers] = useState([]);

  const handleRegister = () => {
    if (users.find(user => user.username === username)) {
      alert("User already exists!");
      return;
    }
    setUsers([...users, { username, password }]);
    alert("Registered! You can now login.");
    setFormType("login");
  };

  const handleLogin = () => {
    const match = users.find(user => user.username === username && user.password === password);
    if (match) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const rows = event.target.result.split("\n").map(line => line.split(","));
      const newFarmers = rows.map((row, index) => ({
        id: index + 1,
        name: row[0],
        village: row[1],
        crop: row[2],
        policy: row[3],
        status: "pending"
      }));
      setFarmers(newFarmers);
    };
    reader.readAsText(file);
  };

  const updateStatus = (id, newStatus) => {
    setFarmers(prev =>
      prev.map(f => (f.id === id ? { ...f, status: newStatus } : f))
    );
  };

  const exportCSV = () => {
    const csv = farmers.map(f => `${f.name},${f.village},${f.crop},${f.policy},${f.status}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "farmer_logs.csv";
    link.click();
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>{formType === "login" ? "🔐 Admin Login" : "📝 Admin Registration"}</h2>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
        {formType === "login" ? (
          <>
            <button onClick={handleLogin}>Login</button> &nbsp;
            <button onClick={() => setFormType("register")}>Register</button>
          </>
        ) : (
          <>
            <button onClick={handleRegister}>Register</button> &nbsp;
            <button onClick={() => setFormType("login")}>Back to Login</button>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 Admin Panel Dashboard</h2>

      <h3>📤 Upload CSV</h3>
      <input type="file" accept=".csv" onChange={handleCSVUpload} />

      <h3>🧾 Registered Farmers</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Village</th>
            <th>Crop</th>
            <th>Policy</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(f => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.village}</td>
              <td>{f.crop}</td>
              <td>{f.policy}</td>
              <td>{f.status}</td>
              <td>
                <select value={f.status} onChange={(e) => updateStatus(f.id, e.target.value)}>
                  <option>pending</option>
                  <option>approved</option>
                  <option>completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>📦 Export Logs</h3>
      <button onClick={exportCSV}>Export as CSV</button>
    </div>
  );
}
