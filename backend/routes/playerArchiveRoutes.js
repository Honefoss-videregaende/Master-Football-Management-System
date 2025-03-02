const express = require('express');
const playerArchiveController = require('../controllers/playerArchiveController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * PlayerArchive Routes
 * Defines the routes for player archive-related operations.
 */

// Route to create a new player archive
router.post('/playerArchives', rateLimiter, playerArchiveController.createPlayerArchive);

// Route to get a player archive by its ID
router.get('/playerArchives/:playerArchiveId', rateLimiter, playerArchiveController.getPlayerArchiveById);

// Route to get all player archives
router.get('/playerArchives', rateLimiter, playerArchiveController.getAllPlayerArchives);

// Route to update a player archive by its ID
router.put('/playerArchives/:playerArchiveId', rateLimiter, playerArchiveController.updatePlayerArchive);

// Route to delete a player archive by its ID
router.delete('/playerArchives/:playerArchiveId', rateLimiter, playerArchiveController.deletePlayerArchive);

module.exports = router;