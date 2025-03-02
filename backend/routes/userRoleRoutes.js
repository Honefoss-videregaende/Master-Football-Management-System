// routes/userRoleRoutes.js
const express = require('express');
const router = express.Router();
const userRoleController = require('../controllers/userRoleController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

/**
 * UserRole Routes
 * Defines the routes for user role-related operations.
 */

// Create a new role
router.post('/roles', rateLimiter, userRoleController.createRole);

// Update an existing role
router.put('/roles/:roleId', rateLimiter, userRoleController.updateRole);

// Delete a role
router.delete('/roles/:roleId', rateLimiter, userRoleController.deleteRole);

// Get a role by its ID
router.get('/roles/:roleId', rateLimiter, userRoleController.getRoleById);

// Get a role by its name
router.get('/roles/name/:roleName', rateLimiter, userRoleController.getRoleByName);

module.exports = router;