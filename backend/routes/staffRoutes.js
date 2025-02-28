const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

/**
 * Staff Routes
 * Defines the routes for staff-related operations.
 */

// Route to create a new staff member
router.post('/staff', staffController.createStaff);

// Route to get a staff member by their ID
router.get('/staff/:staffId', staffController.getStaffById);

// Route to get all staff members
router.get('/staff', staffController.getAllStaff);

// Route to update a staff member by their ID
router.put('/staff/:staffId', staffController.updateStaff);

// Route to delete a staff member by their ID
router.delete('/staff/:staffId', staffController.deleteStaff);

module.exports = router;