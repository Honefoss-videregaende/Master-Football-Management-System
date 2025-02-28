// services/userRoleService.js
const userRoleRepository = require('../repositories/userRoleRepository');

/**
 * Create a new role.
 * @param {object} roleData - The role data to create.
 * @returns {Promise<UserRole>} - The newly created role object.
 * @throws {Error} - If the role name already exists.
 */
const createRole = async (roleData) => {
    const existingRole = await userRoleRepository.findRoleByName(roleData.roleName);
    if (existingRole) {
        throw new Error('Role with this name already exists');
    }
    return await userRoleRepository.createRole(roleData);
};

/**
 * Update an existing role.
 * @param {number} roleId - The ID of the role to update.
 * @param {object} roleData - The updated role data.
 * @returns {Promise<UserRole>} - The updated role object.
 * @throws {Error} - If the role is not found.
 */
const updateRole = async (roleId, roleData) => {
    const role = await userRoleRepository.updateRole(roleId, roleData);
    if (!role) {
        throw new Error('Role not found');
    }
    return role;
};

/**
 * Delete a role.
 * @param {number} roleId - The ID of the role to delete.
 * @returns {Promise<boolean>} - True if the role was deleted, otherwise false.
 * @throws {Error} - If the role is not found.
 */
const deleteRole = async (roleId) => {
    const isDeleted = await userRoleRepository.deleteRole(roleId);
    if (!isDeleted) {
        throw new Error('Role not found');
    }
    return true;
};

/**
 * Get a role by its ID.
 * @param {number} roleId - The ID of the role to retrieve.
 * @returns {Promise<UserRole>} - The role object.
 * @throws {Error} - If the role is not found.
 */
const getRoleById = async (roleId) => {
    const role = await userRoleRepository.findRoleById(roleId);
    if (!role) {
        throw new Error('Role not found');
    }
    return role;
};

/**
 * Get a role by its name.
 * @param {string} roleName - The name of the role to retrieve.
 * @returns {Promise<UserRole>} - The role object.
 * @throws {Error} - If the role is not found.
 */
const getRoleByName = async (roleName) => {
    const role = await userRoleRepository.findRoleByName(roleName);
    if (!role) {
        throw new Error('Role not found');
    }
    return role;
};

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getRoleById,
    getRoleByName,
};