// repositories/coachRoleRepository.js
const CoachRole = require('../models/CoachRole');

/**
 * Find a coach role by its unique ID.
 * @param {number} roleId - The ID of the coach role to find.
 * @returns {Promise<CoachRole>} - The coach role object if found, otherwise null.
 */
const findCoachRoleById = async (roleId) => {
    return await CoachRole.findByPk(roleId);
};

/**
 * Create a new coach role in the database.
 * @param {object} coachRoleData - The coach role data to insert into the database.
 * @returns {Promise<CoachRole>} - The newly created coach role object.
 */
const createCoachRole = async (coachRoleData) => {
    return await CoachRole.create(coachRoleData);
};

/**
 * Update an existing coach role in the database.
 * @param {number} roleId - The ID of the coach role to update.
 * @param {object} coachRoleData - The updated coach role data.
 * @returns {Promise<CoachRole>} - The updated coach role object if found, otherwise null.
 */
const updateCoachRole = async (roleId, coachRoleData) => {
    const coachRole = await CoachRole.findByPk(roleId);
    if (coachRole) {
        return await coachRole.update(coachRoleData);
    }
    return null;
};

/**
 * Delete a coach role from the database.
 * @param {number} roleId - The ID of the coach role to delete.
 * @returns {Promise<boolean>} - True if the coach role was deleted, otherwise false.
 */
const deleteCoachRole = async (roleId) => {
    const coachRole = await CoachRole.findByPk(roleId);
    if (coachRole) {
        await coachRole.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findCoachRoleById,
    createCoachRole,
    updateCoachRole,
    deleteCoachRole,
};