// repositories/seasonRepository.js
// @ts-ignore
const Season = require('../models/Season');

/**
 * Find a season by its unique ID.
 * @param {number} seasonId - The ID of the season to find.
 * @returns {Promise<Season>} - The season object if found, otherwise null.
 */
const findSeasonById = async (seasonId) => {
    return await Season.findByPk(seasonId);
};

/**
 * Find a season by its code.
 * @param {string} seasonCode - The code of the season to find.
 * @returns {Promise<Season>} - The season object if found, otherwise null.
 */
const findSeasonByCode = async (seasonCode) => {
    return await Season.findOne({ where: { seasonCode } });
};

/**
 * Create a new season in the database.
 * @param {object} seasonData - The season data to insert into the database.
 * @returns {Promise<Season>} - The newly created season object.
 */
const createSeason = async (seasonData) => {
    return await Season.create(seasonData);
};

/**
 * Update an existing season in the database.
 * @param {number} seasonId - The ID of the season to update.
 * @param {object} seasonData - The updated season data.
 * @returns {Promise<Season>} - The updated season object if found, otherwise null.
 */
const updateSeason = async (seasonId, seasonData) => {
    const season = await Season.findByPk(seasonId);
    if (season) {
        return await season.update(seasonData);
    }
    return null;
};

/**
 * Delete a season from the database.
 * @param {number} seasonId - The ID of the season to delete.
 * @returns {Promise<boolean>} - True if the season was deleted, otherwise false.
 */
const deleteSeason = async (seasonId) => {
    const season = await Season.findByPk(seasonId);
    if (season) {
        await season.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findSeasonById,
    findSeasonByCode,
    createSeason,
    updateSeason,
    deleteSeason,
};