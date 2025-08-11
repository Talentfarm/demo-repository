
const mongoose = require('mongoose');

const User = require('./models/User');
const Farmer = require('./models/Farmer');
const Policy = require('./models/Policy');

async function connectDB() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crop-insurance');
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
}

async function debugAndFixAddresses() {
    console.log('\n🔍 CHECKING DATABASE STATE...\n');

    try {
      
        const farmers = await Farmer.find({});
        console.log(`📊 Total Farmers: ${farmers.length}\n`);
        
        farmers.forEach((farmer, index) => {
            console.log(`Farmer ${index + 1}:`);
            console.log(`  Name: ${farmer.name}`);
            console.log(`  Address: ${farmer.ethereumAddress}`);
            console.log(`  Land Size: ${farmer.landSize}`);
            console.log(`  District: ${farmer.district}`);
            console.log('  ---');
        });

        
        const users = await User.find({ role: 'farmer' }).populate('farmer');
        console.log(`\n👥 Total Farmer Users: ${users.length}\n`);
        
        users.forEach((user, index) => {
            console.log(`User ${index + 1}:`);
            console.log(`  Username: ${user.username}`);
            console.log(`  Email: ${user.email}`);
            console.log(`  User Address: ${user.ethereumAddress}`);
            console.log(`  Farmer Address: ${user.farmer?.ethereumAddress || 'No farmer linked'}`);
            console.log('  ---');
        });

        
        console.log('\n🔧 FIXING CASE SENSITIVITY ISSUES...\n');
        
        let fixCount = 0;
        
      
        for (let farmer of farmers) {
            const original = farmer.ethereumAddress;
            const fixed = original.toLowerCase();
            
            if (original !== fixed) {
                console.log(`Fixing farmer address: ${original} → ${fixed}`);
                farmer.ethereumAddress = fixed;
                await farmer.save();
                fixCount++;
            }
        }

        
        for (let user of users) {
            const original = user.ethereumAddress;
            const fixed = original.toLowerCase();
            
            if (original !== fixed) {
                console.log(`Fixing user address: ${original} → ${fixed}`);
                user.ethereumAddress = fixed;
                await user.save();
                fixCount++;
            }
        }

        console.log(`\n✅ Fixed ${fixCount} addresses`);

        
        const testAddress = "0x4e9a4D3682Bb1Dc5f8248440fE51ef5Eeb1ff2C8".toLowerCase();
        console.log(`\n🧪 Testing address: ${testAddress}`);
        
        const foundFarmer = await Farmer.findOne({ ethereumAddress: testAddress });
        if (foundFarmer) {
            console.log(`✅ Found farmer: ${foundFarmer.name}`);
        } else {
            console.log(`❌ Farmer not found with address: ${testAddress}`);
            
            
            const allAddresses = await Farmer.find({}, 'ethereumAddress name');
            console.log('\n📋 All addresses in database:');
            allAddresses.forEach(farmer => {
                console.log(`  ${farmer.ethereumAddress} (${farmer.name})`);
            });
        }

    } catch (error) {
        console.error('❌ Error during debug:', error);
    }
}

async function createMissingFarmerIfNeeded() {
    const testAddress = "0x4e9a4d3682bb1dc5f8248440fe51ef5eeb1ff2c8";
    
    const existing = await Farmer.findOne({ ethereumAddress: testAddress });
    if (existing) {
        console.log('✅ Farmer already exists');
        return;
    }

    console.log('🔨 Creating missing farmer profile...');
    
    const newFarmer = new Farmer({
        name: 'Anitha',
        ethereumAddress: testAddress,
        landSize: 2.0,
        district: 'Guntur',
        location: { lat: 16.3067, lon: 80.4365 }
    });
    
    await newFarmer.save();
    console.log('✅ Farmer profile created');
}

async function main() {
    await connectDB();
    await debugAndFixAddresses();
    await createMissingFarmerIfNeeded();
    
    console.log('\n🎉 Debug and fix complete!');
    
    
    const testAddress = "0x4e9a4d3682bb1dc5f8248440fe51ef5eeb1ff2c8";
    const farmer = await Farmer.findOne({ ethereumAddress: testAddress });
    
    if (farmer) {
        console.log(`✅ Final check: Farmer "${farmer.name}" found with address ${farmer.ethereumAddress}`);
    } else {
        console.log('❌ Final check: Farmer still not found');
    }
    
    mongoose.connection.close();
}


main().catch(error => {
    console.error('❌ Script error:', error);
    process.exit(1);
});