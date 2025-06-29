import React from "react";

const insuranceData = [
  {
    policyId: "CROP1234",
    crop: "Wheat",
    location: "Andhra Pradesh",
    coverage: "₹50,000",
    status: "Active",
  },
  {
    policyId: "CROP5678",
    crop: "Rice",
    location: "Telangana",
    coverage: "₹40,000",
    status: "Expired",
  },
];

export default function ViewInsurance() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🪪 Your Insurance Policies</h2>
      <p>View details of your active and past crop insurance policies.</p>
      <div style={cardGrid}>
        {insuranceData.map((policy) => (
          <div key={policy.policyId} style={cardStyle}>
            <h3>{policy.crop} ({policy.policyId})</h3>
            <p><strong>Location:</strong> {policy.location}</p>
            <p><strong>Coverage:</strong> {policy.coverage}</p>
            <p><strong>Status:</strong> {policy.status}</p>
            <button style={viewBtn}>Download Receipt</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
};

const cardStyle = {
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const viewBtn = {
  marginTop: "1rem",
  padding: "0.6rem 1rem",
  backgroundColor: "#1a73e8",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
