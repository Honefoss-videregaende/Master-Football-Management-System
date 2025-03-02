const express = require('express');
const substitutionController = require('../controllers/substitutionController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Substitution Routes
 * Defines the routes for substitution-related operations.
 */

// Route to create a new substitution
router.post('/substitutions', rateLimiter, substitutionController.createSubstitution);

// Route to get a substitution by its ID
router.get('/substitutions/:substitutionId', rateLimiter, substitutionController.getSubstitutionById);

// Route to get all substitutions
router.get('/substitutions', rateLimiter, substitutionController.getAllSubstitutions);

// Route to update a substitution by its ID
router.put('/substitutions/:substitutionId', rateLimiter, substitutionController.updateSubstitution);

// Route to delete a substitution by its ID
router.delete('/substitutions/:substitutionId', rateLimiter, substitutionController.deleteSubstitution);

module.exports = router;