// routes/gameStatusRoutes.js
const express = require('express');
const router = express.Router();
const gameStatusController = require('../controllers/gameStatusController');

// Create a new game status
router.post('/statuses', gameStatusController.createStatus);

// Update an existing game status
router.put('/statuses/:statusId', gameStatusController.updateStatus);

// Delete a game status
router.delete('/statuses/:statusId', gameStatusController.deleteStatus);

// Get a game status by its ID
router.get('/statuses/:statusId', gameStatusController.getStatusById);

// Get a game status by its name
router.get('/statuses/name/:statusName', gameStatusController.getStatusByName);

module.exports = router;