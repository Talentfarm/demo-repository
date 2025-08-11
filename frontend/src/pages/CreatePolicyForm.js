import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('token');

const initialFormData = {
  farmerName: '',
  ethereumAddress: '',
  landSize: '',
  cropType: '',
  premiumAmount: '',
  payoutAmount: '',
  insuranceType: 'Weather-Based',
  location: 'Guntur'
};

const CreatePolicyForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    try {
      const token = getAuthToken();
      const response = await fetch(
        'http://localhost:5000/api/admin/create-policy',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setStatus({
        type: 'success',
        message: `✅ Success! Policy created with ID: ${result.policyId}.`
      });
      setFormData(initialFormData);
    } catch (err) {
      setStatus({ type: 'error', message: `❌ Error: ${err.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      {/* Page Header */}
      <div className="page-header">
        <h2>Create New Weather Insurance Policy – Guntur</h2>
        <Link to="/admin-dashboard" className="btn btn-secondary">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Form Card */}
      <div className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          {/* Farmer Name */}
          <div className="form-group">
            <label htmlFor="farmerName">Farmer Name</label>
            <input
              id="farmerName"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Ethereum Address */}
          <div className="form-group">
            <label htmlFor="ethereumAddress">Farmer's Ethereum Address</label>
            <input
              id="ethereumAddress"
              name="ethereumAddress"
              value={formData.ethereumAddress}
              onChange={handleChange}
              required
            />
          </div>

          {/* Land Size */}
          <div className="form-group">
            <label htmlFor="landSize">Land Size (Acres)</label>
            <input
              id="landSize"
              name="landSize"
              type="number"
              step="0.1"
              value={formData.landSize}
              onChange={handleChange}
              required
            />
          </div>

          {/* Crop Type */}
          <div className="form-group">
            <label htmlFor="cropType">Crop Type</label>
            <select
              id="cropType"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Crop --</option>
              <option value="cotton">Cotton</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="sugarcane">Sugarcane</option>
            </select>
          </div>

          {/* Premium Amount */}
          <div className="form-group">
            <label htmlFor="premiumAmount">Premium (ETH)</label>
            <input
              id="premiumAmount"
              name="premiumAmount"
              type="number"
              step="1"
              value={formData.premiumAmount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Coverage Amount */}
          <div className="form-group">
            <label htmlFor="payoutAmount">Coverage (ETH)</label>
            <input
              id="payoutAmount"
              name="payoutAmount"
              type="number"
              step="1"
              value={formData.payoutAmount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Insurance Type */}
          <div className="form-group">
            <label htmlFor="insuranceType">Insurance Type</label>
            <input
              id="insuranceType"
              name="insuranceType"
              value="Weather-Based"
              readOnly
              className="readonly-field"
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label htmlFor="location">Location (District)</label>
            <input
              id="location"
              name="location"
              value="Guntur"
              readOnly
              className="readonly-field"
            />
          </div>

          {/* Status Message */}
          {status && (
            <p
              className={`status-message ${
                status.type === 'success' ? 'success' : 'error'
              }`}
            >
              {status.message}
            </p>
          )}

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? 'Creating...' : 'Create Policy'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePolicyForm;
