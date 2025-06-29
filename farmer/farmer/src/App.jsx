import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FarmerPortal from "./pages/FarmerPortal";

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, padding: "1rem 2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<FarmerPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
