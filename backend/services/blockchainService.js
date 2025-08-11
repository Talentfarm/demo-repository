const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

class BlockchainService {
    constructor() {
        try {
            const contractArtifactPath = path.resolve(__dirname, '..', '..', 'smart-contract', 'build', 'contracts', 'CropInsurance.json');
            if (!fs.existsSync(contractArtifactPath)) {
                throw new Error(`Contract artifact not found at: ${contractArtifactPath}`);
            }
            const contractData = JSON.parse(fs.readFileSync(contractArtifactPath, 'utf8'));
            const networkId = process.env.GANACHE_NETWORK_ID || '5777';
            const networkData = contractData.networks[networkId];
            if (!networkData) {
                throw new Error(`Contract not deployed to network ID ${networkId}.`);
            }
            this.provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL);
            this.wallet = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY, this.provider);
            this.contractAddress = networkData.address;
            this.contract = new ethers.Contract(this.contractAddress, contractData.abi, this.wallet);
            console.log('✅ Blockchain service initialized successfully!');
            console.log(`📄 Contract Address: ${this.contractAddress}`);
        } catch (error) {
            console.error('❌ FATAL ERROR during Blockchain Service initialization:', error.message);
            this.contract = null;
        }
    }

    async getContractBalance() {
        if (!this.contract) return "0";
        const balance = await this.provider.getBalance(this.contractAddress);
        return ethers.formatEther(balance);
    }

    async fundContract(amountInEther) {
        if (!this.contract) throw new Error('Contract not initialized.');
        const tx = await this.wallet.sendTransaction({
            to: this.contractAddress,
            value: ethers.parseEther(amountInEther.toString())
        });
        await tx.wait();
        const newBalance = await this.getContractBalance();
        return { transactionHash: tx.hash, newBalance: newBalance };
    }

    async registerPolicyOnBlockchain(farmerAddress, farmerName, landSize, cropType, premiumAmount, payoutAmount, insuranceType, location) {
        if (!this.contract) throw new Error('Contract is not initialized.');
        try {
            const premiumWei = ethers.parseEther(premiumAmount.toString());
            const payoutWei = ethers.parseEther(payoutAmount.toString());
            const landSizeInt = Math.floor(landSize * 100);

            // 1. Estimate the gas required for the transaction
            const gasEstimate = await this.contract.registerPolicy.estimateGas(
                farmerAddress, farmerName, landSizeInt, cropType, premiumWei, payoutWei, insuranceType, location
            );
            console.log(`⛽ Estimated gas: ${gasEstimate.toString()}`);

            // 2. Send the transaction with the estimated gas + a buffer
            const tx = await this.contract.registerPolicy(
                farmerAddress, farmerName, landSizeInt, cropType, premiumWei, payoutWei, insuranceType, location,
                {
                    gasLimit: gasEstimate + BigInt(20000) // Add a 20,000 gas buffer
                }
            );
            
            const receipt = await tx.wait();
            
            // 3. Find the confirmation event in the receipt
            const event = receipt.logs.find(log => {
                try { return this.contract.interface.parseLog(log)?.name === 'PolicyRegistered'; } catch { return false; }
            });

            if (event) {
                const parsedLog = this.contract.interface.parseLog(event);
                return parsedLog.args.policyId.toString();
            }
            
            
            throw new Error('PolicyRegistered event not found in transaction receipt.');

        } catch (error) {
            console.error("Error in registerPolicyOnBlockchain:", error);
            throw error;
        }
    }

    async acceptPolicyOnBehalfOfFarmer(policyId, premiumAmountInWei) {
        if (!this.contract) throw new Error('Contract is not initialized.');
        const tx = await this.contract.acceptInsurance(policyId, { value: premiumAmountInWei });
        await tx.wait();
        return { success: true, transactionHash: tx.hash };
    }

    async triggerPayoutOnBlockchain(policyId) {
        if (!this.contract) throw new Error('Contract is not initialized.');
        const tx = await this.contract.triggerPayout(policyId);
        await tx.wait();
        return { success: true, transactionHash: tx.hash };
    }
}

const blockchainService = new BlockchainService();

module.exports = {
    registerPolicyOnBlockchain: (...args) => blockchainService.registerPolicyOnBlockchain(...args),
    acceptPolicyOnBehalfOfFarmer: (...args) => blockchainService.acceptPolicyOnBehalfOfFarmer(...args),
    triggerPayoutOnBlockchain: (...args) => blockchainService.triggerPayoutOnBlockchain(...args),
    getContractBalance: () => blockchainService.getContractBalance(),
    fundContract: (amount) => blockchainService.fundContract(amount),
};