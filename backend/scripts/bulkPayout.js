const { ethers } = require('ethers');
require('dotenv').config();

// List of farmer addresses and payout amounts
const farmerPayouts = [
    {
        address: "0x4e9a4D3682Bb1Dc5f8248440fE51ef5eEb1ff2C8",
        amount: 2.0,
        reason: "Drought Insurance Claim"
    },
    {
        address: "0xf1618ad8d166Ed1Cf299B9d82aBDF9269AeA869E",
        amount: 1.5,
        reason: "Flood Insurance Claim"
    }
    // Add more farmers as needed
];

async function bulkPayoutToFarmers(payouts) {
    try {
        console.log('\n🌾 Crop Insurance Bulk Payout Script');
        console.log('====================================\n');
        
        const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_NODE_URL);
        const adminWallet = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY, provider);
        
        console.log(`👨‍💼 Admin Address: ${adminWallet.address}`);
        
        // Check admin balance
        const adminBalance = await adminWallet.getBalance();
        const totalPayout = payouts.reduce((sum, payout) => sum + payout.amount, 0);
        
        console.log(`📊 Admin Balance: ${ethers.formatEther(adminBalance)} ETH`);
        console.log(`💰 Total Payout Required: ${totalPayout} ETH\n`);
        
        if (ethers.parseEther(totalPayout.toString()) > adminBalance) {
            throw new Error(`Insufficient funds! Required: ${totalPayout} ETH`);
        }
        
        const results = [];
        
        for (let i = 0; i < payouts.length; i++) {
            const payout = payouts[i];
            console.log(`\n📦 Processing payout ${i + 1}/${payouts.length}`);
            console.log(`👨‍🌾 Farmer: ${payout.address}`);
            console.log(`💰 Amount: ${payout.amount} ETH`);
            console.log(`📝 Reason: ${payout.reason}`);
            
            try {
                // Check farmer current balance
                const farmerCurrentBalance = await provider.getBalance(payout.address);
                console.log(`📊 Farmer Current Balance: ${ethers.formatEther(farmerCurrentBalance)} ETH`);
                
                // Send transaction
                const tx = await adminWallet.sendTransaction({
                    to: payout.address,
                    value: ethers.parseEther(payout.amount.toString()),
                    gasLimit: 21000,
                    gasPrice: ethers.parseUnits('20', 'gwei')
                });
                
                console.log(`📋 TX Hash: ${tx.hash}`);
                console.log('⏳ Confirming...');
                
                const receipt = await tx.wait();
                
                if (receipt.status === 1) {
                    const newFarmerBalance = await provider.getBalance(payout.address);
                    console.log(`✅ Success! New balance: ${ethers.formatEther(newFarmerBalance)} ETH`);
                    
                    results.push({
                        farmer: payout.address,
                        amount: payout.amount,
                        success: true,
                        txHash: tx.hash,
                        blockNumber: receipt.blockNumber
                    });
                } else {
                    throw new Error('Transaction failed');
                }
                
            } catch (error) {
                console.log(`❌ Failed: ${error.message}`);
                results.push({
                    farmer: payout.address,
                    amount: payout.amount,
                    success: false,
                    error: error.message
                });
            }
            
            // Wait a bit between transactions
            if (i < payouts.length - 1) {
                console.log('⏳ Waiting 2 seconds before next payout...');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        
        // Summary
        console.log('\n📋 PAYOUT SUMMARY');
        console.log('================');
        const successful = results.filter(r => r.success).length;
        const failed = results.filter(r => !r.success).length;
        
        console.log(`✅ Successful: ${successful}`);
        console.log(`❌ Failed: ${failed}`);
        console.log(`💰 Total Paid: ${results.filter(r => r.success).reduce((sum, r) => sum + r.amount, 0)} ETH\n`);
        
        // Final admin balance
        const finalAdminBalance = await adminWallet.getBalance();
        console.log(`👨‍💼 Final Admin Balance: ${ethers.formatEther(finalAdminBalance)} ETH`);
        
        return results;
        
    } catch (error) {
        console.error('❌ Bulk payout failed:', error.message);
        return [];
    }
}

// Run the bulk payout
if (require.main === module) {
    bulkPayoutToFarmers(farmerPayouts);
}

module.exports = { bulkPayoutToFarmers, farmerPayouts };