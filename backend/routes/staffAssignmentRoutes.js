const express = require('express');
const staffAssignmentController = require('../controllers/staffAssignmentController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * StaffAssignment Routes
 * Defines the routes for staff assignment-related operations.
 */

// Route to create a new staff assignment
router.post('/staffAssignments', rateLimiter, staffAssignmentController.createStaffAssignment);

// Route to get a staff assignment by its ID
router.get('/staffAssignments/:assignmentId', rateLimiter, staffAssignmentController.getStaffAssignmentById);

// Route to get all staff assignments
router.get('/staffAssignments', rateLimiter, staffAssignmentController.getAllStaffAssignments);

// Route to update a staff assignment by its ID
router.put('/staffAssignments/:assignmentId', rateLimiter, staffAssignmentController.updateStaffAssignment);

// Route to delete a staff assignment by its ID
router.delete('/staffAssignments/:assignmentId', rateLimiter, staffAssignmentController.deleteStaffAssignment);

module.exports = router;