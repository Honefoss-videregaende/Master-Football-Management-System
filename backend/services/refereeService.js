// services/refereeService.js
// @ts-ignore
const refereeRepository = require('../repositories/refereeRepository');

/**
 * Create a new referee.
 * @param {object} refereeData - The referee data to create.
 * @returns {Promise<Referee>} - The newly created referee object.
 * @throws {Error} - If validation fails.
 */
const createReferee = async (refereeData) => {
    return await refereeRepository.createReferee(refereeData);
};

/**
 * Update an existing referee.
 * @param {number} refereeId - The ID of the referee to update.
 * @param {object} refereeData - The updated referee data.
 * @returns {Promise<Referee>} - The updated referee object.
 * @throws {Error} - If the referee is not found.
 */
const updateReferee = async (refereeId, refereeData) => {
    const referee = await refereeRepository.updateReferee(refereeId, refereeData);
    if (!referee) {
        throw new Error('Referee not found');
    }
    return referee;
};

/**
 * Delete a referee.
 * @param {number} refereeId - The ID of the referee to delete.
 * @returns {Promise<boolean>} - True if the referee was deleted, otherwise false.
 * @throws {Error} - If the referee is not found.
 */
const deleteReferee = async (refereeId) => {
    const isDeleted = await refereeRepository.deleteReferee(refereeId);
    if (!isDeleted) {
        throw new Error('Referee not found');
    }
    return true;
};

/**
 * Get a referee by their ID.
 * @param {number} refereeId - The ID of the referee to retrieve.
 * @returns {Promise<Referee>} - The referee object.
 * @throws {Error} - If the referee is not found.
 */
const getRefereeById = async (refereeId) => {
    const referee = await refereeRepository.findRefereeById(refereeId);
    if (!referee) {
        throw new Error('Referee not found');
    }
    return referee;
};

module.exports = {
    createReferee,
    updateReferee,
    deleteReferee,
    getRefereeById,
};