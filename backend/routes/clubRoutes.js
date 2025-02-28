// routes/clubRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const clubController = require('../controllers/clubController');

// Create a new club
router.post('/clubs', clubController.createClub);

// Update an existing club
router.put('/clubs/:clubId', clubController.updateClub);

// Delete a club
router.delete('/clubs/:clubId', clubController.deleteClub);

// Get a club by its ID
router.get('/clubs/:clubId', clubController.getClubById);

// Get a club by its FIFA ID
router.get('/clubs/fifa/:fifaId', clubController.getClubByFifaId);

module.exports = router;