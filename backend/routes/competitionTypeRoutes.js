// routes/competitionTypeRoutes.js
const express = require('express');
const router = express.Router();
const competitionTypeController = require('../controllers/competitionTypeController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * CompetitionType Routes
 * Defines the routes for competition type-related operations.
 */

// Create a new competition type
router.post('/types', rateLimiter, competitionTypeController.createType);

// Update an existing competition type
router.put('/types/:typeId', rateLimiter, competitionTypeController.updateType);

// Delete a competition type
router.delete('/types/:typeId', rateLimiter, competitionTypeController.deleteType);

// Get a competition type by its ID
router.get('/types/:typeId', rateLimiter, competitionTypeController.getTypeById);

// Get a competition type by its name
router.get('/types/name/:typeName', rateLimiter, competitionTypeController.getTypeByName);

module.exports = router;