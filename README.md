# 🌾 Crop Insurance DApp  

A comprehensive decentralized application for **crop insurance management**, built with **React.js**, **Node.js**, **Ethereum smart contracts**, and **weather simulation** for automated payouts in the Guntur region.  



## 🏗️ Project Architecture  

crop-insurance-dapp/
├── frontend/              # React.js user interface
├── backend/               # Node.js API server  
├── smart-contract/        # Solidity contracts + Truffle
└── README.md





## ✨ Features  

- 🔐 **Authentication System** – Login/Register for Farmers and Admins  
- 👨‍🌾 **Farmer Dashboard** – View and accept insurance policies  
- 🛡️ **Admin Dashboard** – Create policies, manage weather scenarios, trigger payouts  
- 🌦️ **Weather Simulator** – Test weather conditions:
  - Normal  
  - Drought  
  - Heavy Rainfall  
  - Extreme Heat  
  - High Wind  
- 📊 **Policy Management** – Create, track, and manage crop insurance policies  
- ⚡ **Smart Contract Integration** – Ethereum blockchain for secure, transparent transactions  
- 💰 **Automated Payouts** – Weather-triggered payouts based on crop thresholds  



## 🛠️ Technology Stack  

**Frontend:** React.js, React Router, CSS, Ethers.js  
**Backend:** Node.js, Express.js 
**Blockchain:** Solidity, Truffle, Ganache  
**Database:** MongoDB



## 📋 Prerequisites  

Ensure you have installed:  
- Node.js (v16+) and npm  
- MongoDB  
- Ganache (for local blockchain)  
- Truffle framework  
- Git  



## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Talentfarm/demo-repository
cd crop-insurance-app
2️⃣ Database Setup (MongoDB)
Open MongoDB

Create a database named crop_insurance_app

Create collections: users, farmer, policies

3️⃣ Smart Contract Deployment
bash

cd smart-contract
npm install
truffle compile && truffle migrate --reset
Copy the deployed contract address from Ganache for backend configuration

4️⃣ Backend Setup
bash
Copy
Edit
cd ../backend
npm install
Create a .env file:



DATABASE_URL=your_mongodb_connection_string
CONTRACT_ADDRESS=your_deployed_contract_address_from_ganache
GANACHE_RPC_URL=http://127.0.0.1:7545
JWT_SECRET=your_jwt_secret_key
Start the backend server:


npm start
Backend runs at: http://localhost:5000

5️⃣ Frontend Setup

cd ../frontend
npm install
Create a .env file:


REACT_APP_API_BASE=http://localhost:5000/api
Start the frontend server:


npm start
Frontend runs at: http://localhost:3000

🎯 How to Use
Visit http://localhost:3000

Click Register to create a farmer account or use admin credentials

Admin can access /admin-dashboard to:

Create new policies

Change weather scenarios

Trigger payouts when conditions are met

🌦️ Weather Simulation
Scenario	Effect
Normal	No payouts triggered
Drought	Low rainfall → payouts for sensitive crops
Heavy Rainfall	Excess rain → payouts triggered
Extreme Heat	High temperatures affect crop thresholds
High Wind	Simulates wind damage

🌱 Supported Crops
Cotton – Guntur region specialty

Rice – Optimized weather thresholds

Wheat – Temperature & rainfall sensitive

Sugarcane – Long-term crop protection
