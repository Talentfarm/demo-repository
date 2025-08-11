const { ethers } = require('ethers');
require('dotenv').config();

async function transferToFarmer(farmerAddress, amountInEth, reason = "Insurance Payout") {
    try {
        console.log('\n🌾 Crop Insurance Direct Payout Script');
        console.log('=====================================\n');
        
        // Setup provider and admin wallet
        const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL);
        const adminWallet = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY, provider);
        
        console.log(`👨‍💼 Admin Address: ${adminWallet.address}`);
        console.log(`👨‍🌾 Farmer Address: ${farmerAddress}`);
        console.log(`💰 Payout Amount: ${amountInEth} ETH`);
        console.log(`📝 Reason: ${reason}\n`);
        
        // Check admin balance
        const adminBalance = await adminWallet.getBalance();
        console.log(`📊 Admin Balance: ${ethers.formatEther(adminBalance)} ETH`);
        
        // Check farmer current balance
        const farmerCurrentBalance = await provider.getBalance(farmerAddress);
        console.log(`📊 Farmer Current Balance: ${ethers.formatEther(farmerCurrentBalance)} ETH\n`);
        
        // Validate admin has enough balance
        const payoutAmount = ethers.parseEther(amountInEth.toString());
        if (adminBalance < payoutAmount) {
            throw new Error(`Insufficient admin funds. Required: ${amountInEth} ETH, Available: ${ethers.formatEther(adminBalance)} ETH`);
        }
        
        console.log('💸 Initiating transfer...');
        
        // Create and send transaction
        const tx = await adminWallet.sendTransaction({
            to: farmerAddress,
            value: payoutAmount,
            gasLimit: 21000, // Standard ETH transfer
            gasPrice: ethers.parseUnits('20', 'gwei')
        });
        
        console.log(`📋 Transaction Hash: ${tx.hash}`);
        console.log('⏳ Waiting for confirmation...');
        
        // Wait for transaction confirmation
        const receipt = await tx.wait();
        
        if (receipt.status === 1) {
            console.log('\n✅ Payout Successful!');
            console.log(`📦 Block Number: ${receipt.blockNumber}`);
            console.log(`⛽ Gas Used: ${receipt.gasUsed.toString()}`);
            
            // Check updated balances
            const newAdminBalance = await adminWallet.getBalance();
            const newFarmerBalance = await provider.getBalance(farmerAddress);
            
            console.log(`\n💰 Updated Balances:`);
            console.log(`👨‍💼 Admin: ${ethers.formatEther(newAdminBalance)} ETH`);
            console.log(`👨‍🌾 Farmer: ${ethers.formatEther(newFarmerBalance)} ETH`);
            
            const receivedAmount = newFarmerBalance - farmerCurrentBalance;
            console.log(`\n🎉 Farmer received: ${ethers.formatEther(receivedAmount)} ETH`);
            
            return {
                success: true,
                txHash: tx.hash,
                blockNumber: receipt.blockNumber,
                gasUsed: receipt.gasUsed.toString(),
                amountTransferred: ethers.formatEther(receivedAmount)
            };
        } else {
            throw new Error('Transaction failed');
        }
        
    } catch (error) {
        console.error('❌ Transfer failed:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Command line usage
if (require.main === module) {
    const farmerAddress = process.argv[2];
    const amount = process.argv[3] ? parseFloat(process.argv[3]) : 2.0;
    const reason = process.argv[4] || "Crop Insurance Payout";
    
    if (!farmerAddress) {
        console.log('Usage: node directPayout.js <farmer_address> [amount_in_eth] [reason]');
        console.log('Example: node directPayout.js 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 2.0 "Drought Insurance Claim"');
        process.exit(1);
    }
    
    transferToFarmer(farmerAddress, amount, reason);
}

module.exports = { transferToFarmer };