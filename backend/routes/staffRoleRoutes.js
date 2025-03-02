const express = require('express');
const staffRoleController = require('../controllers/staffRoleController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * StaffRole Routes
 * Defines the routes for staff role-related operations.
 */

// Route to create a new staff role
router.post('/staffRoles', rateLimiter, staffRoleController.createStaffRole);

// Route to get a staff role by its ID
router.get('/staffRoles/:roleId', rateLimiter, staffRoleController.getStaffRoleById);

// Route to get all staff roles
router.get('/staffRoles', rateLimiter, staffRoleController.getAllStaffRoles);

// Route to update a staff role by its ID
router.put('/staffRoles/:roleId', rateLimiter, staffRoleController.updateStaffRole);

// Route to delete a staff role by its ID
router.delete('/staffRoles/:roleId', rateLimiter, staffRoleController.deleteStaffRole);

module.exports = router;