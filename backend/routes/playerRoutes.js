const express = require('express');
const playerController = require('../controllers/playerController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Player Routes
 * Defines the routes for player-related operations.
 */

// Route to create a new player
router.post('/players', rateLimiter, playerController.createPlayer);

// Route to get a player by its ID
router.get('/players/:playerId', rateLimiter, playerController.getPlayerById);

// Route to get all players
router.get('/players', rateLimiter, playerController.getAllPlayers);

// Route to update a player by its ID
router.put('/players/:playerId', rateLimiter, playerController.updatePlayer);

// Route to delete a player by its ID
router.delete('/players/:playerId', rateLimiter, playerController.deletePlayer);

module.exports = router;