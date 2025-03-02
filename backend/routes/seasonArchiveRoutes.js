const express = require('express');
const seasonArchiveController = require('../controllers/seasonArchiveController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * SeasonArchive Routes
 * Defines the routes for season archive-related operations.
 */

// Route to create a new season archive
router.post('/seasonArchives', rateLimiter, seasonArchiveController.createSeasonArchive);

// Route to get a season archive by its ID
router.get('/seasonArchives/:seasonArchiveId', rateLimiter, seasonArchiveController.getSeasonArchiveById);

// Route to get all season archives
router.get('/seasonArchives', rateLimiter, seasonArchiveController.getAllSeasonArchives);

// Route to update a season archive by its ID
router.put('/seasonArchives/:seasonArchiveId', rateLimiter, seasonArchiveController.updateSeasonArchive);

// Route to delete a season archive by its ID
router.delete('/seasonArchives/:seasonArchiveId', rateLimiter, seasonArchiveController.deleteSeasonArchive);

module.exports = router;