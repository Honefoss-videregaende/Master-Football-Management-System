const express = require('express');
const gameEventController = require('../controllers/gameEventController');

const router = express.Router();

/**
 * GameEvent Routes
 * Defines the routes for game event-related operations.
 */

// Route to create a new game event
router.post('/gameEvents', gameEventController.createGameEvent);

// Route to get a game event by its ID
router.get('/gameEvents/:eventId', gameEventController.getGameEventById);

// Route to get all game events
router.get('/gameEvents', gameEventController.getAllGameEvents);

// Route to update a game event by its ID
router.put('/gameEvents/:eventId', gameEventController.updateGameEvent);

// Route to delete a game event by its ID
router.delete('/gameEvents/:eventId', gameEventController.deleteGameEvent);

module.exports = router;