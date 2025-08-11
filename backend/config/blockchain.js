const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); // Ganache local network
const adminWallet = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY, provider);


const contractAbiPath = path.resolve(__dirname, process.env.CONTRACT_ABI_PATH);
const contractAbi = JSON.parse(fs.readFileSync(contractAbiPath, 'utf8')).abi;

const contractAddress = process.env.CONTRACT_ADDRESS;
const cropInsuranceContract = new ethers.Contract(contractAddress, contractAbi, adminWallet);

module.exports = {
    provider,
    adminWallet,
    cropInsuranceContract
};
