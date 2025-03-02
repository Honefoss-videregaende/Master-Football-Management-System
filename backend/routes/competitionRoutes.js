const express = require('express');
const competitionController = require('../controllers/competitionController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Competition Routes
 * Defines the routes for competition-related operations.
 */

// Route to create a new competition
router.post('/competitions', rateLimiter, competitionController.createCompetition);

// Route to get a competition by its ID
router.get('/competitions/:competitionId', rateLimiter, competitionController.getCompetitionById);

// Route to get all competitions
router.get('/competitions', rateLimiter, competitionController.getAllCompetitions);

// Route to update a competition by its ID
router.put('/competitions/:competitionId', rateLimiter, competitionController.updateCompetition);

// Route to delete a competition by its ID
router.delete('/competitions/:competitionId', rateLimiter, competitionController.deleteCompetition);

module.exports = router;