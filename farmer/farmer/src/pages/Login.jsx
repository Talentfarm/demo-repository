import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const generateOtp = () => {
    if (phone.length === 10) {
      const randomOtp = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit random OTP
      setGeneratedOtp(randomOtp);
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      onLogin();
      navigate("/portal");
    } else {
      alert("❌ Incorrect OTP. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "3rem auto", background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#1a73e8", textAlign: "center", marginBottom: "1rem" }}>Login with OTP</h2>

      <label>📱 Phone Number</label>
      <input
        type="text"
        maxLength="10"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter mobile number"
        style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
      />

      {!otpSent ? (
        <button
          onClick={generateOtp}
          style={{ width: "100%", padding: "10px", background: "#1a73e8", color: "white", border: "none", borderRadius: "5px" }}
        >
          Send OTP
        </button>
      ) : (
        <>
          <p style={{ marginTop: "1rem", color: "green", fontWeight: "bold" }}>
            ✅ OTP sent successfully. Your OTP is: <span style={{ fontFamily: "monospace" }}>{generatedOtp}</span>
          </p>

          <label style={{ marginTop: "1rem" }}>🔐 Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP shown above"
            style={{ width: "100%", marginBottom: "1rem", padding: "10px" }}
          />
          <button
            onClick={verifyOtp}
            style={{ width: "100%", padding: "10px", background: "#1a73e8", color: "white", border: "none", borderRadius: "5px" }}
          >
            Verify & Login
          </button>
        </>
      )}
    </div>
  );
}
