// routes/userRoleRoutes.js
const express = require('express');
const router = express.Router();
const userRoleController = require('../controllers/userRoleController');

// Create a new role
router.post('/roles', userRoleController.createRole);

// Update an existing role
router.put('/roles/:roleId', userRoleController.updateRole);

// Delete a role
router.delete('/roles/:roleId', userRoleController.deleteRole);

// Get a role by its ID
router.get('/roles/:roleId', userRoleController.getRoleById);

// Get a role by its name
router.get('/roles/name/:roleName', userRoleController.getRoleByName);

module.exports = router;