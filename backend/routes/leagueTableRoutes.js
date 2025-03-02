const express = require('express');
const leagueTableController = require('../controllers/leagueTableController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * LeagueTable Routes
 * Defines the routes for league table-related operations.
 */

// Route to create a new league table entry
router.post('/leagueTables', rateLimiter, leagueTableController.createLeagueTable);

// Route to get a league table entry by its ID
router.get('/leagueTables/:leagueTableId', rateLimiter, leagueTableController.getLeagueTableById);

// Route to get all league table entries
router.get('/leagueTables', rateLimiter, leagueTableController.getAllLeagueTables);

// Route to update a league table entry by its ID
router.put('/leagueTables/:leagueTableId', rateLimiter, leagueTableController.updateLeagueTable);

// Route to delete a league table entry by its ID
router.delete('/leagueTables/:leagueTableId', rateLimiter, leagueTableController.deleteLeagueTable);

module.exports = router;