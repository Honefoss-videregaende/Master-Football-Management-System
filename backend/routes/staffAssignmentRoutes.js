const express = require('express');
const staffAssignmentController = require('../controllers/staffAssignmentController');

const router = express.Router();

/**
 * StaffAssignment Routes
 * Defines the routes for staff assignment-related operations.
 */

// Route to create a new staff assignment
router.post('/staffAssignments', staffAssignmentController.createStaffAssignment);

// Route to get a staff assignment by its ID
router.get('/staffAssignments/:assignmentId', staffAssignmentController.getStaffAssignmentById);

// Route to get all staff assignments
router.get('/staffAssignments', staffAssignmentController.getAllStaffAssignments);

// Route to update a staff assignment by its ID
router.put('/staffAssignments/:assignmentId', staffAssignmentController.updateStaffAssignment);

// Route to delete a staff assignment by its ID
router.delete('/staffAssignments/:assignmentId', staffAssignmentController.deleteStaffAssignment);

module.exports = router;