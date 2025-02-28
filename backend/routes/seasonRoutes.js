// routes/seasonRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const seasonController = require('../controllers/seasonController');

// Create a new season
router.post('/seasons', seasonController.createSeason);

// Update an existing season
router.put('/seasons/:seasonId', seasonController.updateSeason);

// Delete a season
router.delete('/seasons/:seasonId', seasonController.deleteSeason);

// Get a season by its ID
router.get('/seasons/:seasonId', seasonController.getSeasonById);

// Get a season by its code
router.get('/seasons/code/:seasonCode', seasonController.getSeasonByCode);

module.exports = router;