import React, { useState } from "react";

export default function ClaimPayout() {
  const [claimText, setClaimText] = useState("");

  const handleSubmit = () => {
    if (claimText.trim() === "") {
      alert("Please describe your issue before submitting.");
      return;
    }
    alert("✅ Your claim has been submitted successfully. Tracking ID: CP123456");
    setClaimText("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>💰 Claim Payout</h2>
      <p>Submit a claim for crop loss, damage, or weather-triggered incidents.</p>

      <textarea
        rows={5}
        style={{ width: "100%", marginTop: "1rem", padding: "1rem", borderRadius: "6px", border: "1px solid #ccc" }}
        placeholder="Describe your claim..."
        value={claimText}
        onChange={(e) => setClaimText(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        style={{ marginTop: "1rem", padding: "10px 20px", background: "#1a73e8", color: "#fff", border: "none", borderRadius: "6px" }}
      >
        Submit Claim
      </button>
    </div>
  );
}
