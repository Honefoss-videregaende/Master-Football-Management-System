// routes/clubRoutes.js
const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * Club Routes
 * Defines the routes for club-related operations.
 */

// Create a new club
router.post('/clubs', rateLimiter, clubController.createClub);

// Update an existing club
router.put('/clubs/:clubId', rateLimiter, clubController.updateClub);

// Delete a club
router.delete('/clubs/:clubId', rateLimiter, clubController.deleteClub);

// Get a club by its ID
router.get('/clubs/:clubId', rateLimiter, clubController.getClubById);

// Get a club by its FIFA ID
router.get('/clubs/fifa/:fifaId', rateLimiter, clubController.getClubByFifaId);

module.exports = router;