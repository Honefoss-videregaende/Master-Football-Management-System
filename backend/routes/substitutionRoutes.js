const express = require('express');
const substitutionController = require('../controllers/substitutionController');

const router = express.Router();

/**
 * Substitution Routes
 * Defines the routes for substitution-related operations.
 */

// Route to create a new substitution
router.post('/substitutions', substitutionController.createSubstitution);

// Route to get a substitution by its ID
router.get('/substitutions/:substitutionId', substitutionController.getSubstitutionById);

// Route to get all substitutions
router.get('/substitutions', substitutionController.getAllSubstitutions);

// Route to update a substitution by its ID
router.put('/substitutions/:substitutionId', substitutionController.updateSubstitution);

// Route to delete a substitution by its ID
router.delete('/substitutions/:substitutionId', substitutionController.deleteSubstitution);

module.exports = router;