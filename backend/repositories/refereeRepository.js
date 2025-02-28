// repositories/refereeRepository.js
// @ts-ignore
const Referee = require('../models/Referee');

/**
 * Find a referee by their unique ID.
 * @param {number} refereeId - The ID of the referee to find.
 * @returns {Promise<Referee>} - The referee object if found, otherwise null.
 */
const findRefereeById = async (refereeId) => {
    return await Referee.findByPk(refereeId);
};

/**
 * Create a new referee in the database.
 * @param {object} refereeData - The referee data to insert into the database.
 * @returns {Promise<Referee>} - The newly created referee object.
 */
const createReferee = async (refereeData) => {
    return await Referee.create(refereeData);
};

/**
 * Update an existing referee in the database.
 * @param {number} refereeId - The ID of the referee to update.
 * @param {object} refereeData - The updated referee data.
 * @returns {Promise<Referee>} - The updated referee object if found, otherwise null.
 */
const updateReferee = async (refereeId, refereeData) => {
    const referee = await Referee.findByPk(refereeId);
    if (referee) {
        return await referee.update(refereeData);
    }
    return null;
};

/**
 * Delete a referee from the database.
 * @param {number} refereeId - The ID of the referee to delete.
 * @returns {Promise<boolean>} - True if the referee was deleted, otherwise false.
 */
const deleteReferee = async (refereeId) => {
    const referee = await Referee.findByPk(refereeId);
    if (referee) {
        await referee.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findRefereeById,
    createReferee,
    updateReferee,
    deleteReferee,
};