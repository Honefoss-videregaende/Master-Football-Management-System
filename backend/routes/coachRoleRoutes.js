const express = require('express');
const coachRoleController = require('../controllers/coachRoleController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * CoachRole Routes
 * Defines the routes for coach role-related operations.
 */

// Route to create a new coach role
router.post('/coachRoles', rateLimiter, coachRoleController.createCoachRole);

// Route to get a coach role by its ID
router.get('/coachRoles/:roleId', rateLimiter, coachRoleController.getCoachRoleById);

// Route to get all coach roles
router.get('/coachRoles', rateLimiter, coachRoleController.getAllCoachRoles);

// Route to update a coach role by its ID
router.put('/coachRoles/:roleId', rateLimiter, coachRoleController.updateCoachRole);

// Route to delete a coach role by its ID
router.delete('/coachRoles/:roleId', rateLimiter, coachRoleController.deleteCoachRole);

module.exports = router;