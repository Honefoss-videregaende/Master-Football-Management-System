const express = require('express');
const gameController = require('../controllers/gameController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Game Routes
 * Defines the routes for game-related operations.
 */

// Route to create a new game
router.post('/games', rateLimiter, gameController.createGame);

// Route to get a game by its ID
router.get('/games/:gameId', rateLimiter, gameController.getGameById);

// Route to get all games
router.get('/games', rateLimiter, gameController.getAllGames);

// Route to update a game by its ID
router.put('/games/:gameId', rateLimiter, gameController.updateGame);

// Route to delete a game by its ID
router.delete('/games/:gameId', rateLimiter, gameController.deleteGame);

module.exports = router;