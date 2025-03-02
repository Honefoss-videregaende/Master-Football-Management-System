// routes/gameStatusRoutes.js
const express = require('express');
const router = express.Router();
const gameStatusController = require('../controllers/gameStatusController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * GameStatus Routes
 * Defines the routes for game status-related operations.
 */

// Create a new game status
router.post('/statuses', rateLimiter, gameStatusController.createStatus);

// Update an existing game status
router.put('/statuses/:statusId', rateLimiter, gameStatusController.updateStatus);

// Delete a game status
router.delete('/statuses/:statusId', rateLimiter, gameStatusController.deleteStatus);

// Get a game status by its ID
router.get('/statuses/:statusId', rateLimiter, gameStatusController.getStatusById);

// Get a game status by its name
router.get('/statuses/name/:statusName', rateLimiter, gameStatusController.getStatusByName);

module.exports = router;