// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Authenticate a user during login
router.post('/login', userController.loginUser);

// Update a user's profile
router.put('/:userId', userController.updateUserProfile);

// Soft delete a user
router.delete('/:userId', userController.deleteUser);

module.exports = router;