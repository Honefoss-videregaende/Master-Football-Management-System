const jwt = require('jsonwebtoken');
const { BadRequestError } = require('./customErrors');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new BadRequestError('Invalid token'));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        next(new BadRequestError('Invalid token'));
    }
};

module.exports = authMiddleware;