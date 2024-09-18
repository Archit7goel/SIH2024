// middleware/auth.js
import jwt from 'jsonwebtoken';
import User from '../models/users.models.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select('-password'); // Attach user to request, exclude password
        if (!req.user) throw new Error();
        next();
    } catch (error) {
        res.status(401).send({ error: 'Invalid token.' });
    }
};



export default authMiddleware;