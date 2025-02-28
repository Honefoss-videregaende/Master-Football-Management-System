// controllers/userRoleController.js
const userRoleService = require('../services/userRoleService');

/**
 * Handle creating a new role.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createRole = async (req, res) => {
    try {
        const role = await userRoleService.createRole(req.body);
        res.status(201).json(role); // Return the newly created role
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing role.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateRole = async (req, res) => {
    try {
        const roleId = req.params.roleId;
        const role = await userRoleService.updateRole(roleId, req.body);
        res.status(200).json(role); // Return the updated role
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a role.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteRole = async (req, res) => {
    try {
        const roleId = req.params.roleId;
        await userRoleService.deleteRole(roleId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a role by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getRoleById = async (req, res) => {
    try {
        const roleId = req.params.roleId;
        const role = await userRoleService.getRoleById(roleId);
        res.status(200).json(role); // Return the role
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a role by its name.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getRoleByName = async (req, res) => {
    try {
        const roleName = req.params.roleName;
        const role = await userRoleService.getRoleByName(roleName);
        res.status(200).json(role); // Return the role
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getRoleById,
    getRoleByName,
};