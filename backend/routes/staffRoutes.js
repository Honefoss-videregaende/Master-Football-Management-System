const express = require('express');
const staffController = require('../controllers/staffController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Staff Routes
 * Defines the routes for staff-related operations.
 */

// Route to create a new staff member
router.post('/staff', rateLimiter, staffController.createStaff);

// Route to get a staff member by their ID
router.get('/staff/:staffId', rateLimiter, staffController.getStaffById);

// Route to get all staff members
router.get('/staff', rateLimiter, staffController.getAllStaff);

// Route to update a staff member by their ID
router.put('/staff/:staffId', rateLimiter, staffController.updateStaff);

// Route to delete a staff member by their ID
router.delete('/staff/:staffId', rateLimiter, staffController.deleteStaff);

module.exports = router;