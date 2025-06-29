import React from "react";

export default function FarmerPortalMain({ loggedInUser, onLogout }) {
  return (
    <div style={{
      maxWidth: "850px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#f9fbff",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(26,115,232,0.12)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1a73e8"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Welcome, Farmer {loggedInUser}</h2>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "#d32f2f",
            color: "white",
            border: "none",
            padding: "0.6rem 1rem",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "700"
          }}
        >
          Logout
        </button>
      </div>

      <section style={{ marginTop: "1.5rem" }}>
        <h3>My Insurance Policy</h3>
        <div style={{
          backgroundColor: "white",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          marginBottom: "1.5rem"
        }}>
          <p><strong>Crop:</strong> Wheat</p>
          <p><strong>Land Size:</strong> 2 Acres</p>
          <p><strong>District:</strong> Hyderabad</p>
          <p><strong>Scheme:</strong> Government Crop Insurance 2025</p>
          <p><strong>Status:</strong> <span style={{ color: "green" }}>Active</span></p>
          <button
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              padding: "0.7rem 1.3rem",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "1rem"
            }}
            onClick={() => alert("Policy confirmed & enrolled on blockchain!")}
          >
            Confirm & Activate Policy
          </button>
        </div>

        <h3>Live Crop Status</h3>
        <div style={{
          backgroundColor: "white",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          marginBottom: "1.5rem"
        }}>
          <p>No damage detected</p>
          <p>Rainfall alert: risk of drought</p>
        </div>

        <h3>Claim Payout Notification</h3>
        <div style={{
          backgroundColor: "white",
          padding: "1rem 1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          marginBottom: "1.5rem"
        }}>
          <p>₹1,500 transferred on 20th June</p>
        </div>

        <h3>Download Receipt</h3>
        <button
          onClick={() => alert("Downloading PDF report with blockchain hash...")}
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "10px",
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          Download PDF
        </button>

        <h3 style={{ marginTop: "2rem" }}>Language Selection</h3>
        <select style={{
          padding: "0.6rem 1rem",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "1rem",
          border: "1.5px solid #1a73e8",
          cursor: "pointer"
        }} onChange={(e) => alert(`Language changed to ${e.target.value}`)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
        </select>

        <h3 style={{ marginTop: "2rem" }}>Contact / Help</h3>
        <button
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "10px",
            fontWeight: "700",
            cursor: "pointer",
            marginRight: "1rem"
          }}
          onClick={() => alert("Calling support: 1800-123-456")}
        >
          Call for Help
        </button>

        <button
          style={{
            backgroundColor: "#34a853",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            borderRadius: "10px",
            fontWeight: "700",
            cursor: "pointer"
          }}
          onClick={() => alert("Opening chat with agri volunteer...")}
        >
          Chat with Agri Volunteer
        </button>
      </section>
    </div>
  );
}
