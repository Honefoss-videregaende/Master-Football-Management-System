const express = require('express');
const competitionController = require('../controllers/competitionController');

const router = express.Router();

/**
 * Competition Routes
 * Defines the routes for competition-related operations.
 */

// Route to create a new competition
router.post('/competitions', competitionController.createCompetition);

// Route to get a competition by its ID
router.get('/competitions/:competitionId', competitionController.getCompetitionById);

// Route to get all competitions
router.get('/competitions', competitionController.getAllCompetitions);

// Route to update a competition by its ID
router.put('/competitions/:competitionId', competitionController.updateCompetition);

// Route to delete a competition by its ID
router.delete('/competitions/:competitionId', competitionController.deleteCompetition);

module.exports = router;