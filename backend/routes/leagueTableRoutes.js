const express = require('express');
const leagueTableController = require('../controllers/leagueTableController');

const router = express.Router();

/**
 * LeagueTable Routes
 * Defines the routes for league table-related operations.
 */

// Route to create a new league table entry
router.post('/leagueTables', leagueTableController.createLeagueTable);

// Route to get a league table entry by its ID
router.get('/leagueTables/:leagueTableId', leagueTableController.getLeagueTableById);

// Route to get all league table entries
router.get('/leagueTables', leagueTableController.getAllLeagueTables);

// Route to update a league table entry by its ID
router.put('/leagueTables/:leagueTableId', leagueTableController.updateLeagueTable);

// Route to delete a league table entry by its ID
router.delete('/leagueTables/:leagueTableId', leagueTableController.deleteLeagueTable);

module.exports = router;