const express = require('express');
const playerStatisticsController = require('../controllers/playerStatisticsController');

const router = express.Router();

/**
 * PlayerStatistics Routes
 * Defines the routes for player statistics-related operations.
 */

// Route to create new player statistics
router.post('/playerStatistics', playerStatisticsController.createPlayerStatistics);

// Route to get player statistics by its ID
router.get('/playerStatistics/:statisticId', playerStatisticsController.getPlayerStatisticsById);

// Route to get all player statistics
router.get('/playerStatistics', playerStatisticsController.getAllPlayerStatistics);

// Route to update player statistics by its ID
router.put('/playerStatistics/:statisticId', playerStatisticsController.updatePlayerStatistics);

// Route to delete player statistics by its ID
router.delete('/playerStatistics/:statisticId', playerStatisticsController.deletePlayerStatistics);

module.exports = router;