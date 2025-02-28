// routes/refereeRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const refereeController = require('../controllers/refereeController');

// Create a new referee
router.post('/referees', refereeController.createReferee);

// Update an existing referee
router.put('/referees/:refereeId', refereeController.updateReferee);

// Delete a referee
router.delete('/referees/:refereeId', refereeController.deleteReferee);

// Get a referee by their ID
router.get('/referees/:refereeId', refereeController.getRefereeById);

module.exports = router;