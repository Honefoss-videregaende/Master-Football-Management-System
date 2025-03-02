const express = require('express');
const competitionTypeTranslationsController = require('../controllers/competitionTypeTranslationsController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * CompetitionTypeTranslations Routes
 * Defines the routes for competition type translations-related operations.
 */

// Route to create a new competition type translation
router.post('/competitionTypeTranslations', rateLimiter, competitionTypeTranslationsController.createCompetitionTypeTranslation);

// Route to get a competition type translation by its ID
router.get('/competitionTypeTranslations/:translationId', rateLimiter, competitionTypeTranslationsController.getCompetitionTypeTranslationById);

// Route to get all competition type translations
router.get('/competitionTypeTranslations', rateLimiter, competitionTypeTranslationsController.getAllCompetitionTypeTranslations);

// Route to update a competition type translation by its ID
router.put('/competitionTypeTranslations/:translationId', rateLimiter, competitionTypeTranslationsController.updateCompetitionTypeTranslation);

// Route to delete a competition type translation by its ID
router.delete('/competitionTypeTranslations/:translationId', rateLimiter, competitionTypeTranslationsController.deleteCompetitionTypeTranslation);

module.exports = router;