import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  const features = [
    { icon: "🔐", title: "Secure Login", clickable: true, route: "/login" },
    { icon: "🪪", title: "View Insurance", clickable: true, route: "/view-insurance" },
    { icon: "✅", title: "Activate Policy", clickable: true, route: "/activate-policy" },
    { icon: "📈", title: "Live Monitoring", clickable: isLoggedIn, route: "/live-monitoring" },
    { icon: "💰", title: "Claim Payout", clickable: isLoggedIn, route: "/claim-payout" },
    
  ];

  function handleFeatureClick(feature) {
    if (feature.clickable) {
      navigate(feature.route);
    } else {
      alert(`🔒 "${feature.title}" is available only after login.`);
    }
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "3rem auto", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#1a73e8", fontWeight: "900" }}>Welcome to CropInsure</h1>
      <p style={{ textAlign: "center", fontSize: "1.3rem", color: "#444", marginBottom: "3rem" }}>
        Your trusted blockchain-based crop insurance portal to protect your farm.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2rem"
      }}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={() => handleFeatureClick(feature)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleFeatureClick(feature)}
            style={{
              padding: "2rem",
              backgroundColor: feature.clickable ? "#f0f7ff" : "#e3e3e3",
              borderRadius: "15px",
              boxShadow: feature.clickable ? "0 6px 14px rgba(26, 115, 232, 0.15)" : "none",
              textAlign: "center",
              cursor: feature.clickable ? "pointer" : "not-allowed",
              userSelect: "none",
              transition: "all 0.3s ease",
              fontSize: "1.1rem",
              fontWeight: "700",
              color: "#1a73e8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "160px"
            }}
          >
            <span style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{feature.icon}</span>
            <span>{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
