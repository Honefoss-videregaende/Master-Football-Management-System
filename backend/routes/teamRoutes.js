const express = require('express');
const teamController = require('../controllers/teamController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Team Routes
 * Defines the routes for team-related operations.
 */

// Route to create a new team
router.post('/teams', rateLimiter, teamController.createTeam);

// Route to get a team by its ID
router.get('/teams/:teamId', rateLimiter, teamController.getTeamById);

// Route to get all teams
router.get('/teams', rateLimiter, teamController.getAllTeams);

// Route to update a team by its ID
router.put('/teams/:teamId', rateLimiter, teamController.updateTeam);

// Route to delete a team by its ID
router.delete('/teams/:teamId', rateLimiter, teamController.deleteTeam);

module.exports = router;