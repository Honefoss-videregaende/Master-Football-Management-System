const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

/**
 * Team Routes
 * Defines the routes for team-related operations.
 */

// Route to create a new team
router.post('/teams', teamController.createTeam);

// Route to get a team by its ID
router.get('/teams/:teamId', teamController.getTeamById);

// Route to get all teams
router.get('/teams', teamController.getAllTeams);

// Route to update a team by its ID
router.put('/teams/:teamId', teamController.updateTeam);

// Route to delete a team by its ID
router.delete('/teams/:teamId', teamController.deleteTeam);

module.exports = router;