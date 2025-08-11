

const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

console.log('AuthMiddleware: JWT_SECRET =', process.env.JWT_SECRET);

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            
            req.user = await User.findById(decoded.userId).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            next();
        } catch (error) {
            console.error('Auth error:', error.message);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        // This check will now work because req.user is correctly populated
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: `User role '${req.user ? req.user.role : "undefined"}' is not authorized to access this route` });
        }
        next();
    };
};

module.exports = { protect, authorize };