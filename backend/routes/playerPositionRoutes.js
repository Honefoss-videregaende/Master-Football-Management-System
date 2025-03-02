const express = require('express');
const playerPositionController = require('../controllers/playerPositionController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * PlayerPosition Routes
 * Defines the routes for player position-related operations.
 */

// Route to create a new player position
router.post('/playerPositions', rateLimiter, playerPositionController.createPlayerPosition);

// Route to get a player position by its ID
router.get('/playerPositions/:positionId', rateLimiter, playerPositionController.getPlayerPositionById);

// Route to get all player positions
router.get('/playerPositions', rateLimiter, playerPositionController.getAllPlayerPositions);

// Route to update a player position by its ID
router.put('/playerPositions/:positionId', rateLimiter, playerPositionController.updatePlayerPosition);

// Route to delete a player position by its ID
router.delete('/playerPositions/:positionId', rateLimiter, playerPositionController.deletePlayerPosition);

module.exports = router;