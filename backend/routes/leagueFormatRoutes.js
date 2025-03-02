const express = require('express');
const leagueFormatController = require('../controllers/leagueFormatController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * LeagueFormat Routes
 * Defines the routes for league format-related operations.
 */

// Route to create a new league format
router.post('/leagueFormats', rateLimiter, leagueFormatController.createLeagueFormat);

// Route to get a league format by its ID
router.get('/leagueFormats/:formatId', rateLimiter, leagueFormatController.getLeagueFormatById);

// Route to get all league formats
router.get('/leagueFormats', rateLimiter, leagueFormatController.getAllLeagueFormats);

// Route to update a league format by its ID
router.put('/leagueFormats/:formatId', rateLimiter, leagueFormatController.updateLeagueFormat);

// Route to delete a league format by its ID
router.delete('/leagueFormats/:formatId', rateLimiter, leagueFormatController.deleteLeagueFormat);

module.exports = router;