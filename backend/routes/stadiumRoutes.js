// routes/stadiumRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const stadiumController = require('../controllers/stadiumController');

// Create a new stadium
router.post('/stadiums', stadiumController.createStadium);

// Update an existing stadium
router.put('/stadiums/:stadiumId', stadiumController.updateStadium);

// Delete a stadium
router.delete('/stadiums/:stadiumId', stadiumController.deleteStadium);

// Get a stadium by its ID
router.get('/stadiums/:stadiumId', stadiumController.getStadiumById);

// Get a stadium by its FIFA ID
router.get('/stadiums/fifa/:fifaId', stadiumController.getStadiumByFifaId);

module.exports = router;