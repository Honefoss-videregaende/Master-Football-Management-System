// routes/competitionTypeRoutes.js
// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const competitionTypeController = require('../controllers/competitionTypeController');

// Create a new competition type
router.post('/types', competitionTypeController.createType);

// Update an existing competition type
router.put('/types/:typeId', competitionTypeController.updateType);

// Delete a competition type
router.delete('/types/:typeId', competitionTypeController.deleteType);

// Get a competition type by its ID
router.get('/types/:typeId', competitionTypeController.getTypeById);

// Get a competition type by its name
router.get('/types/name/:typeName', competitionTypeController.getTypeByName);

module.exports = router;