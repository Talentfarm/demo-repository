
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cron = require('node-cron');

// Database & Models
const { connectDB } = require('./config/db');
const { User, Farmer, Policy } = require('./models');

// Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const farmerRoutes = require('./routes/farmerRoutes');

// Services
const { checkAndTriggerPayouts } = require('./services/weatherService');
const { getContractBalance, triggerPayoutOnBlockchain } = require('./services/blockchainService');

// Weather simulator
const SimpleWeatherSimulator = require('./services/SimpleWeatherSimulator');
const weatherSim = new SimpleWeatherSimulator();

const app = express();
app.use(cors());
app.use(express.json());

// Register API routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/farmer', farmerRoutes);


app.get('/api/demo/weather', (req, res) => {
    const cropType = req.query.cropType || 'cotton'; // defaults to cotton
    const weather = weatherSim.getCurrentWeather('Guntur');
    const evaluation = weatherSim.evaluatePayoutConditionForCrop(cropType);

    res.json({
        success: true,
        cropType,
        weather,
        evaluation,
        message: evaluation.shouldTriggerPayout
            ? '🚨 PAYOUT RECOMMENDED!'
            : '✅ Weather normal'
    });
});


app.get('/api/demo/weather/scenarios', (req, res) => {
    res.json({
        success: true,
        scenarios: weatherSim.getAllScenarios(),
        current: weatherSim.currentScenario
    });
});


app.post('/api/demo/weather/scenario', (req, res) => {
    const { scenario, cropType } = req.body;
    const cropKey = cropType || 'cotton'; // fallback
    const success = weatherSim.setScenario(scenario);

    if (success) {
        const weather = weatherSim.getCurrentWeather('Guntur');
        const evaluation = weatherSim.evaluatePayoutConditionForCrop(cropKey);
        res.json({
            success: true,
            message: `Weather changed to: ${weather.scenario}`,
            cropType: cropKey,
            weather,
            evaluation
        });
    } else {
        res.status(400).json({
            success: false,
            error: 'Invalid scenario. Use: normal, heatwave, heavyrain, or storm'
        });
    }
});


app.get('/api/demo/weather/evaluate/:cropType', (req, res) => {
    const cropType = req.params.cropType ;
    const evaluation = weatherSim.evaluatePayoutConditionForCrop(cropType);
    res.json(evaluation);
});


app.post('/api/admin/trigger-payout/:policyId', async (req, res) => {
    try {
        const { policyId } = req.params;
        const policy = await Policy.findOne({ policyId: Number(policyId) });
        if (!policy) {
            return res.status(404).json({ success: false, message: 'Policy not found' });
        }

        const evaluation = weatherSim.evaluatePayoutConditionForCrop(policy.cropType);

        if (!evaluation.shouldTriggerPayout) {
            return res.status(400).json({
                success: false,
                message: `Current weather does not warrant payout for crop: ${policy.cropType}`,
                evaluation
            });
        }

       
        const result = await triggerPayoutOnBlockchain(policy.policyId);

        res.json({
            success: true,
            reason: evaluation.reason,
            transaction: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
});


app.get('/api/health', async (req, res) => {
    try {
        const policyCount = await Policy.countDocuments({});
        let contractBalance = 'Unknown';
        try {
            contractBalance = await getContractBalance();
        } catch (balanceError) {
            console.error('Contract balance check failed:', balanceError.message);
        }

        res.json({
            status: 'healthy',
            timestamp: new Date(),
            database: 'connected',
            totalPolicies: policyCount,
            contractBalance: contractBalance + ' ETH',
            version: process.env.npm_package_version || '1.0.0'
        });
    } catch (error) {
        res.status(500).json({
            status: 'unhealthy',
            timestamp: new Date(),
            error: error.message
        });
    }
});


app.get('/', (req, res) => {
    res.send('🌾 Crop Insurance Backend API is running! 🌾');
});


const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connectDB();
        console.log('✅ DB Connected');

       
        try {
            const balance = await getContractBalance();
            console.log(`💰 Contract balance: ${balance} ETH`);
        } catch (error) {
            console.error('❌ Contract balance check failed:', error.message);
        }

        
        cron.schedule('0 */2 * * *', async () => {
            console.log(`[${new Date().toISOString()}] Running scheduled weather check...`);
            try {
                await checkAndTriggerPayouts();
                console.log('✅ Weather check completed');
            } catch (error) {
                console.error('❌ Scheduled weather check failed:', error.message);
            }
        }, { scheduled: true, timezone: "Asia/Kolkata" });

        app.listen(PORT, () => {
            console.log(`\n🚀 Backend server running on port ${PORT}`);
            console.log(`🌐 http://localhost:${PORT}/api`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};


process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received. Shutting down...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received. Shutting down...');
    process.exit(0);
});

process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Promise Rejection:', err);
    process.exit(1);
});

startServer();
