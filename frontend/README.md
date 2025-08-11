This is the React.js based frontend for the Crop Insurance Decentralized Application.
It provides an interface for farmers and admins to manage crop insurance policies, monitor weather scenarios, and trigger payouts securely via Ethereum smart contracts.

# Overview
The frontend is built with:

React.js for UI

React Router for navigation

Fetch API for backend requests

Ethers.js / Web3.js (if directly interacting with blockchain)

CSS for theming and responsive design

# Features
Public Landing Page – Overview of the DApp and quick actions

Auth Page – Login / Register for Farmers and Admins

Admin Dashboard – Manage policies, view weather, change scenarios, trigger payouts

Farmer Dashboard – View and accept insurance policies

Create Policy Form – Add weather-based crop insurance policies

Weather Simulation – Change weather scenarios and test payouts

# Project Structure
text
frontend/
  ├── src/
  │   ├── components/        # Reusable React components (Header, Auth, Dashboards, etc.)
  │   ├── pages/             # Page-specific components like CreatePolicyForm
  │   ├── styles/            # CSS files (App.css / page-specific CSS)
  │   ├── App.js             # Main app routing
  │   └── index.js           # Entry point
  ├── public/                # Static assets
  └── package.json
# Requirements
Node.js v16+

npm or yarn

# Installation & Running
Install dependencies:

bash
npm install
Start development server:

bash
npm start
Open in browser at: http://localhost:3000

# Environment Variables
You may need to create a .env file for API URLs or blockchain RPC endpoints, for example:

text
REACT_APP_API_BASE=http://localhost:5000/api
Build for Production
bash
npm run build
This will output a production-ready build in the build/ folder.

