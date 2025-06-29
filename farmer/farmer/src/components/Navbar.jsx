import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      backgroundColor: "#1a73e8",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{ fontWeight: "900", fontSize: "1.5rem" }}>CropInsure</div>

      <div>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#fff" : "#d0e2ff",
            marginRight: "2rem",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/portal"
          style={{
            color: location.pathname === "/portal" ? "#fff" : "#d0e2ff",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Farmer Portal
        </Link>
      </div>
    </nav>
  );
}
