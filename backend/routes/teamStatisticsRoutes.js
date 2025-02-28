const express = require('express');
const teamStatisticsController = require('../controllers/teamStatisticsController');

const router = express.Router();

/**
 * TeamStatistics Routes
 * Defines the routes for team statistics-related operations.
 */

// Route to create new team statistics
router.post('/teamStatistics', teamStatisticsController.createTeamStatistics);

// Route to get team statistics by its ID
router.get('/teamStatistics/:statisticId', teamStatisticsController.getTeamStatisticsById);

// Route to get all team statistics
router.get('/teamStatistics', teamStatisticsController.getAllTeamStatistics);

// Route to update team statistics by its ID
router.put('/teamStatistics/:statisticId', teamStatisticsController.updateTeamStatistics);

// Route to delete team statistics by its ID
router.delete('/teamStatistics/:statisticId', teamStatisticsController.deleteTeamStatistics);

module.exports = router;