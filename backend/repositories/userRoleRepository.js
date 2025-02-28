// repositories/userRoleRepository.js
const UserRole = require('../models/UserRole');

/**
 * Find a role by its unique ID.
 * @param {number} roleId - The ID of the role to find.
 * @returns {Promise<UserRole>} - The role object if found, otherwise null.
 */
const findRoleById = async (roleId) => {
    return await UserRole.findByPk(roleId);
};

/**
 * Find a role by its name.
 * @param {string} roleName - The name of the role to find.
 * @returns {Promise<UserRole>} - The role object if found, otherwise null.
 */
const findRoleByName = async (roleName) => {
    return await UserRole.findOne({ where: { roleName } });
};

/**
 * Create a new role in the database.
 * @param {object} roleData - The role data to insert into the database.
 * @returns {Promise<UserRole>} - The newly created role object.
 */
const createRole = async (roleData) => {
    return await UserRole.create(roleData);
};

/**
 * Update an existing role in the database.
 * @param {number} roleId - The ID of the role to update.
 * @param {object} roleData - The updated role data.
 * @returns {Promise<UserRole>} - The updated role object if found, otherwise null.
 */
const updateRole = async (roleId, roleData) => {
    const role = await UserRole.findByPk(roleId);
    if (role) {
        return await role.update(roleData);
    }
    return null;
};

/**
 * Delete a role from the database.
 * @param {number} roleId - The ID of the role to delete.
 * @returns {Promise<boolean>} - True if the role was deleted, otherwise false.
 */
const deleteRole = async (roleId) => {
    const role = await UserRole.findByPk(roleId);
    if (role) {
        await role.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findRoleById,
    findRoleByName,
    createRole,
    updateRole,
    deleteRole,
};