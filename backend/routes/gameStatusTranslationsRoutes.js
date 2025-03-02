const express = require('express');
const gameStatusTranslationsController = require('../controllers/gameStatusTranslationsController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * GameStatusTranslations Routes
 * Defines the routes for game status translations-related operations.
 */

// Route to create a new game status translation
router.post('/gameStatusTranslations', rateLimiter, gameStatusTranslationsController.createGameStatusTranslation);

// Route to get a game status translation by its ID
router.get('/gameStatusTranslations/:translationId', rateLimiter, gameStatusTranslationsController.getGameStatusTranslationById);

// Route to get all game status translations
router.get('/gameStatusTranslations', rateLimiter, gameStatusTranslationsController.getAllGameStatusTranslations);

// Route to update a game status translation by its ID
router.put('/gameStatusTranslations/:translationId', rateLimiter, gameStatusTranslationsController.updateGameStatusTranslation);

// Route to delete a game status translation by its ID
router.delete('/gameStatusTranslations/:translationId', rateLimiter, gameStatusTranslationsController.deleteGameStatusTranslation);

module.exports = router;