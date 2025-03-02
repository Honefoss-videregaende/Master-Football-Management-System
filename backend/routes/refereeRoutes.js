// routes/refereeRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const refereeController = require('../controllers/refereeController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * Referee Routes
 * Defines the routes for referee-related operations.
 */

// Create a new referee
router.post('/referees', rateLimiter, refereeController.createReferee);

// Update an existing referee
router.put('/referees/:refereeId', rateLimiter, refereeController.updateReferee);

// Delete a referee
router.delete('/referees/:refereeId', rateLimiter, refereeController.deleteReferee);

// Get a referee by their ID
router.get('/referees/:refereeId', rateLimiter, refereeController.getRefereeById);

module.exports = router;