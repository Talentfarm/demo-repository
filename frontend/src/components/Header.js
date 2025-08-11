import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/auth");
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="brand-link">🌾 Crop Insurance DApp</Link>
      </div>
      <div className="header-right">
        {!user ? (
          <>
            <Link to="/auth" className="header-link">Login</Link>
            <Link to="/auth" className="header-link">Register</Link>
          </>
        ) : (
          <>
            <span className="user-info">
              Welcome, <strong>{user.username}</strong> ({user.role})
            </span>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}
