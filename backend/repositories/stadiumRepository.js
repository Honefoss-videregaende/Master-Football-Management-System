// repositories/stadiumRepository.js
// @ts-ignore
const Stadium = require('../models/Stadium');

/**
 * Find a stadium by its unique ID.
 * @param {number} stadiumId - The ID of the stadium to find.
 * @returns {Promise<Stadium>} - The stadium object if found, otherwise null.
 */
const findStadiumById = async (stadiumId) => {
    return await Stadium.findByPk(stadiumId);
};

/**
 * Find a stadium by its FIFA ID.
 * @param {string} fifaId - The FIFA ID of the stadium to find.
 * @returns {Promise<Stadium>} - The stadium object if found, otherwise null.
 */
const findStadiumByFifaId = async (fifaId) => {
    return await Stadium.findOne({ where: { fifaId } });
};

/**
 * Create a new stadium in the database.
 * @param {object} stadiumData - The stadium data to insert into the database.
 * @returns {Promise<Stadium>} - The newly created stadium object.
 */
const createStadium = async (stadiumData) => {
    return await Stadium.create(stadiumData);
};

/**
 * Update an existing stadium in the database.
 * @param {number} stadiumId - The ID of the stadium to update.
 * @param {object} stadiumData - The updated stadium data.
 * @returns {Promise<Stadium>} - The updated stadium object if found, otherwise null.
 */
const updateStadium = async (stadiumId, stadiumData) => {
    const stadium = await Stadium.findByPk(stadiumId);
    if (stadium) {
        return await stadium.update(stadiumData);
    }
    return null;
};

/**
 * Delete a stadium from the database.
 * @param {number} stadiumId - The ID of the stadium to delete.
 * @returns {Promise<boolean>} - True if the stadium was deleted, otherwise false.
 */
const deleteStadium = async (stadiumId) => {
    const stadium = await Stadium.findByPk(stadiumId);
    if (stadium) {
        await stadium.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findStadiumById,
    findStadiumByFifaId,
    createStadium,
    updateStadium,
    deleteStadium,
};