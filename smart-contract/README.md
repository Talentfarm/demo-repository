

# Crop Insurance Smart Contract
This folder contains the CropInsurance.sol smart contract for our DApp.
It is written in Solidity and deployed using Truffle.

# Overview
The Crop Insurance contract manages:

Creation and storage of farmer insurance policies

Premium and coverage amount handling

Admin‑triggered payouts based on weather conditions

Transparent records on the Ethereum blockchain

Development
Place CropInsurance.sol in the contracts/ folder.

Write migration scripts in migrations/ to deploy the contract.

# Compile & Deploy
Use Truffle to compile and migrate in one step:

bash
truffle compile && truffle migrate
Files
contracts/CropInsurance.sol → Main smart contract logic

migrations/ → Deployment scripts

