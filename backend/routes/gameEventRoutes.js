const express = require('express');
const gameEventController = require('../controllers/gameEventController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * GameEvent Routes
 * Defines the routes for game event-related operations.
 */

// Route to create a new game event
router.post('/gameEvents', rateLimiter, gameEventController.createGameEvent);

// Route to get a game event by its ID
router.get('/gameEvents/:eventId', rateLimiter, gameEventController.getGameEventById);

// Route to get all game events
router.get('/gameEvents', rateLimiter, gameEventController.getAllGameEvents);

// Route to update a game event by its ID
router.put('/gameEvents/:eventId', rateLimiter, gameEventController.updateGameEvent);

// Route to delete a game event by its ID
router.delete('/gameEvents/:eventId', rateLimiter, gameEventController.deleteGameEvent);

module.exports = router;