

const fs = require('fs');
const path = require('path');
require('dotenv').config();

function findContractFile() {
    console.log('🔍 Looking for CropInsurance.json...\n');
    
    const possiblePaths = [
        '../smart-contract/build/contracts/CropInsurance.json',
        '../smart-contract/artifacts/contracts/CropInsurance.sol/CropInsurance.json',
        './smart-contract/build/contracts/CropInsurance.json',
        './smart-contract/artifacts/contracts/CropInsurance.sol/CropInsurance.json',
        '../../smart-contract/build/contracts/CropInsurance.json',
        '../../smart-contract/artifacts/contracts/CropInsurance.sol/CropInsurance.json'
    ];
    
    console.log('Current directory:', __dirname);
    console.log('Process cwd:', process.cwd());
    console.log('CONTRACT_ABI_PATH from .env:', process.env.CONTRACT_ABI_PATH);
    console.log('\nChecking possible paths:\n');
    
    for (let relativePath of possiblePaths) {
        const fullPath = path.resolve(__dirname, relativePath);
        console.log(`Checking: ${fullPath}`);
        
        if (fs.existsSync(fullPath)) {
            console.log(`✅ FOUND! Contract file exists at: ${relativePath}\n`);
            
            try {
                const contractData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
                console.log('📄 Contract details:');
                console.log(`   Contract name: ${contractData.contractName || 'Not found'}`);
                console.log(`   Network info: ${Object.keys(contractData.networks || {}).length > 0 ? 'Available' : 'No deployments found'}`);
                console.log(`   ABI entries: ${contractData.abi ? contractData.abi.length : 'Not found'}`);
                
                if (contractData.networks && Object.keys(contractData.networks).length > 0) {
                    const networkIds = Object.keys(contractData.networks);
                    console.log(`   Deployed networks: ${networkIds.join(', ')}`);
                    
                   
                    networkIds.forEach(networkId => {
                        const network = contractData.networks[networkId];
                        console.log(`   Network ${networkId} address: ${network.address}`);
                    });
                    
                    console.log('\n✅ Update your .env file with:');
                    console.log(`CONTRACT_ABI_PATH="${relativePath}"`);
                    
                    // Get the latest deployed address
                    const latestNetwork = Math.max(...networkIds.map(Number));
                    const latestAddress = contractData.networks[latestNetwork].address;
                    console.log(`CONTRACT_ADDRESS="${latestAddress}"`);
                }
                
                return fullPath;
            } catch (error) {
                console.log(`❌ Found file but couldn't parse JSON: ${error.message}`);
            }
        } else {
            console.log(`❌ Not found`);
        }
        console.log('');
    }
    
    console.log('❌ Contract file not found in any expected location!\n');
    console.log('Make sure you have:');
    console.log('1. Compiled contracts: cd smart-contract && truffle compile');
    console.log('2. Deployed contracts: cd smart-contract && truffle migrate --network development');
    
    return null;
}

if (require.main === module) {
    findContractFile();
}

module.exports = { findContractFile };