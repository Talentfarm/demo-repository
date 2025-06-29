// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FarmerPortal from "./pages/FarmerPortal";
import About from "./pages/About";
import ViewInsurance from "./pages/ViewInsurance";
import ActivatePolicy from "./pages/ActivatePolicy";
import LiveMonitoring from "./pages/LiveMonitoring";
import ClaimPayout from "./pages/ClaimPayout";
import AdminPanel from "./pages/AdminPanel"; // ✅ Step 1: Import

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f4f8;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = styled.nav`
  background: #1a73e8;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.8rem;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  &.active {
    border-bottom: 2px solid #ffeb3b;
  }
  &:hover {
    color: #ffeb3b;
  }
`;

const LanguageSelector = styled.select`
  background: white;
  border-radius: 6px;
  border: none;
  padding: 6px 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  color: #1a73e8;
  margin-left: 1rem;
`;

const Footer = styled.footer`
  margin-top: 4rem;
  padding: 1rem;
  background: #1a73e8;
  color: white;
  text-align: center;
`;

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("loggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Logo>CropInsure</Logo>
        <NavLinks>
          <NavItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavItem>

          {/* ✅ Step 2: Admin Panel Link Added */}
          <NavItem>
            <StyledNavLink to="/admin">Admin Panel</StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="/portal">Farmer Portal</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/about">About</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </NavItem>
          <NavItem>
            <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="te">తెలుగు</option>
            </LanguageSelector>
          </NavItem>
        </NavLinks>
      </Navbar>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home isLoggedIn={isLoggedIn} />
                <Footer>
                  © 2025 CropInsure | Contact: support@cropinsure.example
                </Footer>
              </>
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/portal" element={<FarmerPortal />} />
          <Route path="/about" element={<About />} />
          <Route path="/view-insurance" element={<ViewInsurance />} />
          <Route path="/activate-policy" element={<ActivatePolicy />} />
          <Route path="/live-monitoring" element={<LiveMonitoring />} />
          <Route path="/claim-payout" element={<ClaimPayout />} />
          <Route path="/admin" element={<AdminPanel />} /> {/* ✅ Step 3: Route Added */}
        </Routes>
      </main>
    </>
  );
}
