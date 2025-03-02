const express = require('express');
const teamStatisticsController = require('../controllers/teamStatisticsController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * TeamStatistics Routes
 * Defines the routes for team statistics-related operations.
 */

// Route to create new team statistics
router.post('/teamStatistics', rateLimiter, teamStatisticsController.createTeamStatistics);

// Route to get team statistics by its ID
router.get('/teamStatistics/:statisticId', rateLimiter, teamStatisticsController.getTeamStatisticsById);

// Route to get all team statistics
router.get('/teamStatistics', rateLimiter, teamStatisticsController.getAllTeamStatistics);

// Route to update team statistics by its ID
router.put('/teamStatistics/:statisticId', rateLimiter, teamStatisticsController.updateTeamStatistics);

// Route to delete team statistics by its ID
router.delete('/teamStatistics/:statisticId', rateLimiter, teamStatisticsController.deleteTeamStatistics);

module.exports = router;