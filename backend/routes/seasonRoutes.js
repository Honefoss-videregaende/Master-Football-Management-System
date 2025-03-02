// routes/seasonRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const seasonController = require('../controllers/seasonController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * Season Routes
 * Defines the routes for season-related operations.
 */

// Create a new season
router.post('/seasons', rateLimiter, seasonController.createSeason);

// Update an existing season
router.put('/seasons/:seasonId', rateLimiter, seasonController.updateSeason);

// Delete a season
router.delete('/seasons/:seasonId', rateLimiter, seasonController.deleteSeason);

// Get a season by its ID
router.get('/seasons/:seasonId', rateLimiter, seasonController.getSeasonById);

// Get a season by its code
router.get('/seasons/code/:seasonCode', rateLimiter, seasonController.getSeasonByCode);

module.exports = router;