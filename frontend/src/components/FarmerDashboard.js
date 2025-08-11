import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './FarmerDashboard.css'; 

const getAuthToken = () => localStorage.getItem('token');

const FarmerDashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPolicies = async () => {
    setIsLoading(true);
    setError('');
    try {
      const token = getAuthToken();
      const response = await fetch('http://localhost:5000/api/farmer/my-policies', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to fetch policies.');
      }
      const data = await response.json();
      setPolicies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchPolicies(); }, []);

  const handleAcceptPolicy = async (policyId) => {
    if (!window.confirm(`Accept Policy ID: ${policyId}?`)) return;
    try {
      const token = getAuthToken();
      const response = await fetch(`http://localhost:5000/api/farmer/accept-policy/${policyId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      alert('✅ Policy accepted successfully!');
      fetchPolicies();
    } catch (err) {
      alert(`❌ Acceptance failed: ${err.message}`);
    }
  };

  const formatEth = (weiString) => ethers.formatEther(weiString || '0');
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  if (error) return <div className="error-message">Error: {error}</div>;
  if (isLoading) return <div className="loading-message">Loading dashboard...</div>;

  return (
    <div className="farmer-dashboard">
      <div className="dashboard-header">
        <h2>🌾 Your Insurance Policies</h2>
        <button className="refresh-btn" onClick={fetchPolicies}>🔄 Refresh</button>
      </div>

      {policies.length === 0 ? (
        <p className="no-data">No policies have been assigned to you yet.</p>
      ) : (
        <div className="policy-grid">
          {policies.map(policy => (
            <div key={policy.policyId} className="policy-card">
              <div className="policy-header">
                <h3>Policy #{policy.policyNumber}</h3>
                <span className={`status-badge ${
                  policy.isPaid ? 'paid' :
                  policy.isAccepted ? 'active' : 'pending'
                }`}>
                  {policy.isPaid ? 'Paid Out' : policy.isAccepted ? 'Active' : 'Pending Acceptance'}
                </span>
              </div>
              <div className="policy-body">
                <p><strong>👨‍🌾 Farmer:</strong> {policy.farmer?.name}</p>
                <p><strong>💳 Wallet:</strong> {policy.farmer?.ethereumAddress}</p>
                <p><strong>🌱 Crop:</strong> {policy.cropType}</p>
                <p><strong>🛡 Insurance:</strong> {policy.insuranceType}</p>
                <p><strong>📅 Issue Date:</strong> {formatDate(policy.issueDate)}</p>
                <p><strong>💰 Premium:</strong> {formatEth(policy.premiumAmount)} ETH</p>
                <p><strong>💵 Coverage:</strong> {formatEth(policy.payoutAmount)} ETH</p>
              </div>
              {!policy.isAccepted && (
                <div className="policy-footer">
                  <button 
                    className="accept-btn"
                    onClick={() => handleAcceptPolicy(policy.policyId)}
                  >
                    ✅ Accept Policy
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
