import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="home-wrapper">
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">🌾 Crop Insurance DApp</h1>
        <p className="hero-subtitle">
          Smart, transparent, and automated crop protection for farmers in Guntur and beyond.
        </p>
        
        <div className="hero-buttons">
          {!user ? (
            <>
              <Link to="/auth" className="btn btn-primary">Login</Link>
              <Link to="/auth" className="btn btn-secondary">Register</Link>
            </>
          ) : (
              <Link
                to={user.role === 'admin' ? '/admin-dashboard' : '/farmer-dashboard'}
                className="btn btn-primary"
              >
                Go to Dashboard
              </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>📊 Weather Monitoring</h3>
          <p>Real-time weather tracking for proactive risk management and instant claim processing.</p>
        </div>
        <div className="feature-card">
          <h3>💰 Instant Payouts</h3>
          <p>Automated payouts triggered by weather events, secured by smart contracts.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Blockchain Transparency</h3>
          <p>Every policy and transaction is recorded on the Ethereum blockchain for trust and verification.</p>
        </div>
      </section>

      {/* Footer */}
<footer className="home-footer">
  <p>© {new Date().getFullYear()} Crop Insurance DApp. All rights reserved.</p>
</footer>

    </div>
  );
  
};

export default HomePage;
