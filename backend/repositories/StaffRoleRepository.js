// repositories/staffRoleRepository.js
const StaffRole = require('../models/StaffRole');

/**
 * Find a staff role by its unique ID.
 * @param {number} roleId - The ID of the staff role to find.
 * @returns {Promise<StaffRole>} - The staff role object if found, otherwise null.
 */
const findStaffRoleById = async (roleId) => {
    return await StaffRole.findByPk(roleId);
};

/**
 * Create a new staff role in the database.
 * @param {object} staffRoleData - The staff role data to insert into the database.
 * @returns {Promise<StaffRole>} - The newly created staff role object.
 */
const createStaffRole = async (staffRoleData) => {
    return await StaffRole.create(staffRoleData);
};

/**
 * Update an existing staff role in the database.
 * @param {number} roleId - The ID of the staff role to update.
 * @param {object} staffRoleData - The updated staff role data.
 * @returns {Promise<StaffRole>} - The updated staff role object if found, otherwise null.
 */
const updateStaffRole = async (roleId, staffRoleData) => {
    const staffRole = await StaffRole.findByPk(roleId);
    if (staffRole) {
        return await staffRole.update(staffRoleData);
    }
    return null;
};

/**
 * Delete a staff role from the database.
 * @param {number} roleId - The ID of the staff role to delete.
 * @returns {Promise<boolean>} - True if the staff role was deleted, otherwise false.
 */
const deleteStaffRole = async (roleId) => {
    const staffRole = await StaffRole.findByPk(roleId);
    if (staffRole) {
        await staffRole.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findStaffRoleById,
    createStaffRole,
    updateStaffRole,
    deleteStaffRole,
};