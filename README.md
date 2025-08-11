
# 🌾 Crop Insurance DApp
A comprehensive decentralized application for crop insurance management, built with React.js frontend, Node.js backend, Ethereum smart contracts, and weather simulation for automated payouts in the Guntur region.

# 🏗️ Project Architecture

crop-insurance-dapp/
├── frontend/              # React.js user interface
├── backend/               # Node.js API server  
├── smart-contract/        # Solidity contracts + Truffle
# └── README.md
✨ Features
🔐 Authentication System - Login/Register for Farmers and Admins

👨🌾 Farmer Dashboard - View and accept insurance policies

🛡️ Admin Dashboard - Create policies, manage weather scenarios, trigger payouts

🌦️ Weather Simulator - Test different weather conditions (Normal, Drought, Heavy Rainfall, Extreme Heat, High Wind)

📊 Policy Management - Create, track, and manage crop insurance policies

⚡ Smart Contract Integration - Ethereum blockchain for secure, transparent transactions

💰 Automated Payouts - Weather-triggered payouts based on crop thresholds

# 🛠️ Technology Stack
Frontend: React.js, React Router, CSS, Ethers.js

Backend: Node.js, Express.js, MongoDB, Sequelize ORM

Blockchain: Solidity, Truffle, Ganache

Database: Microsoft SQL Server Management Studio

# 📋 Prerequisites
Before you begin, ensure you have installed:

Node.js (v16+) and npm

MongoDB

Ganache (for local blockchain)

Truffle framework

Git

# 🚀 Getting Started
1. Clone the Repository
bash
git clone https://github.com/Talentfarm/demo-repository
cd crop-insurance-app
2. Database Setup
Open MongoDB

Create a new database called crop_insurance_app
Create collections users,farmer,policies.

3. Smart Contract Deployment
Open Ganache and start a new workspace

Note down the RPC Server URL (usually http://127.0.0.1:7545)

Navigate to smart contract folder:

bash
cd smart-contract
npm install
Compile and deploy contracts:

bash
truffle compile && truffle migrate --reset
Copy the deployed contract address from Ganache for backend configuration

4. Backend Setup
Navigate to backend folder:

bash
cd ../backend
npm install
Create .env file with your configurations:

text
DATABASE_URL=your_sql_server_connection_string
CONTRACT_ADDRESS=your_deployed_contract_address_from_ganache
GANACHE_RPC_URL=http://127.0.0.1:7545
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash
npm start
Backend will run on http://localhost:5000

5. Frontend Setup
Navigate to frontend folder:

bash
cd ../frontend
npm install
Create .env file:

text
REACT_APP_API_BASE=http://localhost:5000/api
Start the development server:

bash
npm start
Frontend will run on http://localhost:3000

🎯 How to Use
First Time Setup
Visit http://localhost:3000

Click Register to create a farmer account or use admin credentials

Admin can access /admin-dashboard to:

Create new policies

Change weather scenarios

Trigger payouts when conditions are met

Weather Simulation
The system includes a weather simulator with scenarios:

Normal Weather - No payouts triggered

Drought - Low rainfall triggers payouts for sensitive crops

Heavy Rainfall - Excess rain triggers payouts

Extreme Heat - High temperatures affect crop thresholds

High Wind - Wind damage simulation

Supported Crops
Cotton - Guntur region specialty

Rice - Weather thresholds optimized for region

Wheat - Temperature and rainfall sensitive

Sugarcane - Long-term crop protection
