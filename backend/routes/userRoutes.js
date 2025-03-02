// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const rateLimiter = require('../middleware/rateLimiter');

// Register a new user
router.post('/register', rateLimiter, userController.registerUser);

// Authenticate a user during login
router.post('/login', rateLimiter, userController.loginUser);

// Update a user's profile
router.put('/:userId', rateLimiter, userController.updateUserProfile);

// Soft delete a user
router.delete('/:userId', rateLimiter, userController.deleteUser);

module.exports = router;