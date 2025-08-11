
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import AdminDashboard from "./components/AdminDashboard";
import FarmerDashboard from "./components/FarmerDashboard";
import CreatePolicyForm from "./pages/CreatePolicyForm";
import Header from "./components/Header"; // ✅ import the header
import "./App.css";
import HomePage from './components/HomePage'
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        setUser(JSON.parse(userString));
      }
    } catch (error) {
      localStorage.clear();
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Header user={user} setUser={setUser} /> {/* ✅ Always shown */}
      <main className="page-container">
        <Routes>
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/create-policy" element={<CreatePolicyForm />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
