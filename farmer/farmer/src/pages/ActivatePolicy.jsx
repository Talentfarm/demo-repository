import React, { useState } from "react";

export default function ActivatePolicy() {
  const [form, setForm] = useState({
    farmerName: "",
    cropType: "",
    location: "",
    coverageAmount: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Policy Activated for ${form.farmerName}!`);
   
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>✅ Activate New Policy</h2>
      <p>Fill out the form to activate a new crop insurance policy.</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", marginTop: "2rem" }}>
        <label>Farmer Name:</label>
        <input name="farmerName" style={inputStyle} value={form.farmerName} onChange={handleChange} required />

        <label>Crop Type:</label>
        <input name="cropType" style={inputStyle} value={form.cropType} onChange={handleChange} required />

        <label>Location:</label>
        <input name="location" style={inputStyle} value={form.location} onChange={handleChange} required />

        <label>Coverage Amount (₹):</label>
        <input type="number" name="coverageAmount" style={inputStyle} value={form.coverageAmount} onChange={handleChange} required />

        <button type="submit" style={buttonStyle}>Activate Policy</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.8rem 1.5rem",
  backgroundColor: "#1a73e8",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
