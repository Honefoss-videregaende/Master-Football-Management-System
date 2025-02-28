const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

/**
 * Game Routes
 * Defines the routes for game-related operations.
 */

// Route to create a new game
router.post('/games', gameController.createGame);

// Route to get a game by its ID
router.get('/games/:gameId', gameController.getGameById);

// Route to get all games
router.get('/games', gameController.getAllGames);

// Route to update a game by its ID
router.put('/games/:gameId', gameController.updateGame);

// Route to delete a game by its ID
router.delete('/games/:gameId', gameController.deleteGame);

module.exports = router;