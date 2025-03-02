const express = require('express');
const playerStatisticsController = require('../controllers/playerStatisticsController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * PlayerStatistics Routes
 * Defines the routes for player statistics-related operations.
 */

// Route to create new player statistics
router.post('/playerStatistics', rateLimiter, playerStatisticsController.createPlayerStatistics);

// Route to get player statistics by its ID
router.get('/playerStatistics/:statisticId', rateLimiter, playerStatisticsController.getPlayerStatisticsById);

// Route to get all player statistics
router.get('/playerStatistics', rateLimiter, playerStatisticsController.getAllPlayerStatistics);

// Route to update player statistics by its ID
router.put('/playerStatistics/:statisticId', rateLimiter, playerStatisticsController.updatePlayerStatistics);

// Route to delete player statistics by its ID
router.delete('/playerStatistics/:statisticId', rateLimiter, playerStatisticsController.deletePlayerStatistics);

module.exports = router;