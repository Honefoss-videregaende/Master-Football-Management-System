const express = require('express');
const playerController = require('../controllers/playerController');

const router = express.Router();

/**
 * Player Routes
 * Defines the routes for player-related operations.
 */

// Route to create a new player
router.post('/players', playerController.createPlayer);

// Route to get a player by its ID
router.get('/players/:playerId', playerController.getPlayerById);

// Route to get all players
router.get('/players', playerController.getAllPlayers);

// Route to update a player by its ID
router.put('/players/:playerId', playerController.updatePlayer);

// Route to delete a player by its ID
router.delete('/players/:playerId', playerController.deletePlayer);

module.exports = router;