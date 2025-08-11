

const { fundContract, getContractBalance } = require('../services/blockchainService');
require('dotenv').config();

async function main() {
    try {
        console.log('🌾 Crop Insurance Contract Funding Script');
        console.log('==========================================\n');

        // Check current balance
        console.log('📊 Checking current contract balance...');
        const currentBalance = await getContractBalance();
        console.log(`Current balance: ${currentBalance} ETH\n`);

        // Get funding amount from command line or use default
        const args = process.argv.slice(2);
        const fundingAmount = args[0] ? parseFloat(args[0]) : 10.0; // Default 10 ETH

        if (isNaN(fundingAmount) || fundingAmount <= 0) {
            console.error('❌ Invalid funding amount. Please provide a positive number.');
            console.log('Usage: node scripts/fundContract.js [amount_in_eth]');
            console.log('Example: node scripts/fundContract.js 5.0');
            process.exit(1);
        }

        console.log(`💰 Funding contract with ${fundingAmount} ETH...`);
        console.log('⏳ Please wait while the transaction is processed...\n');

        // Fund the contract
        const result = await fundContract(fundingAmount);

        if (result.success) {
            console.log('✅ Contract funded successfully!');
            console.log(`📄 Transaction Hash: ${result.transactionHash}`);
            console.log(`💰 New Balance: ${result.newBalance} ETH`);
            console.log(`🔗 View on Ganache: Check your Ganache interface for transaction details\n`);

            // Verify the funding worked
            const verifyBalance = await getContractBalance();
            if (parseFloat(verifyBalance) >= parseFloat(currentBalance) + fundingAmount - 0.01) { // Allow for gas costs
                console.log('✅ Funding verification successful!');
            } else {
                console.log('⚠️  Warning: Balance verification shows unexpected amount');
            }
        } else {
            console.log('❌ Failed to fund contract');
        }

    } catch (error) {
        console.error('❌ Error funding contract:', error.message);
        console.log('\nTroubleshooting:');
        console.log('1. Make sure Ganache is running');
        console.log('2. Check that your ADMIN_PRIVATE_KEY has sufficient funds');
        console.log('3. Verify CONTRACT_ADDRESS is correct');
        console.log('4. Ensure ETHEREUM_NODE_URL points to your Ganache instance');
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main };