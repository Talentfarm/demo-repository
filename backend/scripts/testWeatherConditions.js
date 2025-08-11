

const { connectDB } = require('../config/db');
const { Policy } = require('../models');
const { checkAndTriggerPayouts } = require('../services/weatherService');
const { getContractBalance } = require('../services/blockchainService');
require('dotenv').config();

async function main() {
    try {
        console.log('🌦️  Crop Insurance Weather Testing Script');
        console.log('=========================================\n');

        // Connect to database
        await connectDB();
        console.log('✅ Database connected');

        // Check contract balance
        const balance = await getContractBalance();
        console.log(`💰 Contract balance: ${balance} ETH`);

        if (parseFloat(balance) < 0.1) {
            console.log('⚠️  Warning: Contract balance is very low. Run funding script first:');
            console.log('   node scripts/fundContract.js 10\n');
        }

        // Get active policies
        const activePolicies = await Policy.find({
            isPaid: false,
            isAccepted: true,
            isExpired: false
        }).populate('farmer', 'name district');

        console.log(`📋 Found ${activePolicies.length} active policies to check\n`);

        if (activePolicies.length === 0) {
            console.log('ℹ️  No active policies found. Make sure farmers have accepted policies.');
            process.exit(0);
        }

        // Display active policies
        console.log('Active Policies:');
        activePolicies.forEach((policy, index) => {
            console.log(`${index + 1}. Policy ID: ${policy.policyId}`);
            console.log(`   Farmer: ${policy.farmer.name}`);
            console.log(`   District: ${policy.farmer.district}`);
            console.log(`   Insurance Type: ${policy.insuranceType}`);
            console.log(`   Payout Amount: ${policy.getFormattedPayout()} ETH`);
            console.log('');
        });

        console.log('🔄 Running weather condition checks...\n');

        // Run the weather check process
        await checkAndTriggerPayouts();

        // Check results
        const updatedPolicies = await Policy.find({
            _id: { $in: activePolicies.map(p => p._id) }
        }).populate('farmer', 'name');

        const paidPolicies = updatedPolicies.filter(p => p.isPaid);
        
        console.log('\n📊 Results Summary:');
        console.log('==================');
        console.log(`Total policies checked: ${activePolicies.length}`);
        console.log(`Payouts triggered: ${paidPolicies.length}`);
        console.log(`Policies still active: ${activePolicies.length - paidPolicies.length}\n`);

        if (paidPolicies.length > 0) {
            console.log('💰 Payments Made:');
            paidPolicies.forEach(policy => {
                console.log(`✅ ${policy.farmer.name} - ${policy.payoutAmountEth} ETH`);
                console.log(`   Reason: ${policy.payoutReason}`);
                console.log(`   Transaction: ${policy.transactionHash}`);
                console.log('');
            });
        } else {
            console.log('ℹ️  No weather conditions met current payout criteria.');
            console.log('\nTo test payments, you can:');
            console.log('1. Temporarily lower thresholds in weatherService.js');
            console.log('2. Use the manual admin payout endpoint');
            console.log('3. Wait for actual weather conditions to be met');
        }

        // Final balance check
        const finalBalance = await getContractBalance();
        console.log(`\n💰 Final contract balance: ${finalBalance} ETH`);

    } catch (error) {
        console.error('❌ Error in weather testing:', error.message);
        console.log('\nTroubleshooting:');
        console.log('1. Ensure database is running and accessible');
        console.log('2. Check OpenWeather API key is valid');
        console.log('3. Verify Ganache is running');
        console.log('4. Make sure policies exist and are accepted by farmers');
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main };