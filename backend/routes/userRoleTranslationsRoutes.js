const express = require('express');
const userRoleTranslationsController = require('../controllers/userRoleTranslationsController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * UserRoleTranslations Routes
 * Defines the routes for user role translations-related operations.
 */

// Route to create a new user role translation
router.post('/userRoleTranslations', rateLimiter, userRoleTranslationsController.createUserRoleTranslation);

// Route to get a user role translation by its ID
router.get('/userRoleTranslations/:translationId', rateLimiter, userRoleTranslationsController.getUserRoleTranslationById);

// Route to get all user role translations
router.get('/userRoleTranslations', rateLimiter, userRoleTranslationsController.getAllUserRoleTranslations);

// Route to update a user role translation by its ID
router.put('/userRoleTranslations/:translationId', rateLimiter, userRoleTranslationsController.updateUserRoleTranslation);

// Route to delete a user role translation by its ID
router.delete('/userRoleTranslations/:translationId', rateLimiter, userRoleTranslationsController.deleteUserRoleTranslation);

module.exports = router;