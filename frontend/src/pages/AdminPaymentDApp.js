import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getAdminPolicies } from '../api/backendApi';
import { cropInsuranceContractAbi } from '../utils/abi'; 

const AdminPaymentDApp = () => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [adminAddress, setAdminAddress] = useState('');
  const [contract, setContract] = useState(null);

  // Constants
  const CONTRACT_ADDRESS = "0xe3fE5327cdd875f28eED4f13e7BEcBd2d7482A7D"; 
  const CONTRACT_ABI = cropInsuranceContractAbi; 

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      setLoading(true);
     
      const fetchedPolicies = await getAdminPolicies();
      setPolicies(fetchedPolicies);
    } catch (error) {
      console.error("Failed to fetch policies:", error);
      setStatus("Error fetching policies.");
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        const signer = await provider.getSigner();
        setSigner(signer);
        const address = await signer.getAddress();
        setAdminAddress(address);
        setStatus(`Connected as: ${address}`);

        
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        setContract(contract);
      } catch (error) {
        console.error("User denied account access or other error:", error);
        setStatus("Failed to connect wallet.");
      }
    } else {
      setStatus("Please install MetaMask!");
    }
  };

  const sendPayment = async (policyNumber, payoutAmount) => {
    if (!contract) {
      setStatus("Wallet not connected.");
      return;
    }
    
    
    const contractOwner = await contract.owner();
    if (adminAddress.toLowerCase() !== contractOwner.toLowerCase()) {
      setStatus("Error: Only the contract owner can trigger payouts.");
      return;
    }

    setStatus(`Sending payment for policy #${policyNumber}...`);
    try {
      const tx = await contract.triggerPayout(policyNumber);
      await tx.wait();
      setStatus(`Payment sent! Tx Hash: ${tx.hash}`);

      
      await updatePaymentStatus(policyNumber, tx.hash);

      
      fetchPolicies();
    } catch (error) {
      console.error("Payment failed:", error);
      setStatus(`Payment failed: ${error.message}`);
    }
  };

  
  const updatePaymentStatus = async (policyNumber, transactionHash) => {
    
    try {
        await fetch('/api/admin/update-payout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({ policyNumber, transactionHash, status: 'paid_out' })
        });
        console.log("Backend updated successfully.");
    } catch (error) {
        console.error("Failed to update backend status:", error);
        setStatus("Payout successful on blockchain, but failed to update backend database.");
    }
  };

  return (
    <div className="admin-payment-dapp">
      <h2>Admin Payouts</h2>
      {!adminAddress ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <div>
          <p>Connected: {adminAddress}</p>
          <p>Status: {status}</p>
          {loading ? (
            <p>Loading policies...</p>
          ) : (
            policies.map(policy => (
              <div key={policy.policyNumber} className="policy-card">
                <p>Policy #: {policy.policyNumber}</p>
                <p>Farmer: {policy.farmer.name}</p>
                <p>Payout Amount: {policy.payoutAmount} ETH</p>
                <p>Status: {policy.status}</p>
                {policy.status === 'payout_triggered' || policy.status === 'claimed' ? (
                  <button onClick={() => sendPayment(policy.policyNumber, policy.payoutAmount)}>
                    Send Payout
                  </button>
                ) : (
                  <p>Payout not yet triggered.</p>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPaymentDApp;