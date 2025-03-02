// routes/stadiumRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const stadiumController = require('../controllers/stadiumController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * Stadium Routes
 * Defines the routes for stadium-related operations.
 */

// Create a new stadium
router.post('/stadiums', rateLimiter, stadiumController.createStadium);

// Update an existing stadium
router.put('/stadiums/:stadiumId', rateLimiter, stadiumController.updateStadium);

// Delete a stadium
router.delete('/stadiums/:stadiumId', rateLimiter, stadiumController.deleteStadium);

// Get a stadium by its ID
router.get('/stadiums/:stadiumId', rateLimiter, stadiumController.getStadiumById);

// Get a stadium by its FIFA ID
router.get('/stadiums/fifa/:fifaId', rateLimiter, stadiumController.getStadiumByFifaId);

module.exports = router;