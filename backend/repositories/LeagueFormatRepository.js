// repositories/leagueFormatRepository.js
const LeagueFormat = require('../models/LeagueFormat');

/**
 * Find a league format by its unique ID.
 * @param {number} formatId - The ID of the league format to find.
 * @returns {Promise<LeagueFormat>} - The league format object if found, otherwise null.
 */
const findLeagueFormatById = async (formatId) => {
    return await LeagueFormat.findByPk(formatId);
};

/**
 * Create a new league format in the database.
 * @param {object} leagueFormatData - The league format data to insert into the database.
 * @returns {Promise<LeagueFormat>} - The newly created league format object.
 */
const createLeagueFormat = async (leagueFormatData) => {
    return await LeagueFormat.create(leagueFormatData);
};

/**
 * Update an existing league format in the database.
 * @param {number} formatId - The ID of the league format to update.
 * @param {object} leagueFormatData - The updated league format data.
 * @returns {Promise<LeagueFormat>} - The updated league format object if found, otherwise null.
 */
const updateLeagueFormat = async (formatId, leagueFormatData) => {
    const leagueFormat = await LeagueFormat.findByPk(formatId);
    if (leagueFormat) {
        return await leagueFormat.update(leagueFormatData);
    }
    return null;
};

/**
 * Delete a league format from the database.
 * @param {number} formatId - The ID of the league format to delete.
 * @returns {Promise<boolean>} - True if the league format was deleted, otherwise false.
 */
const deleteLeagueFormat = async (formatId) => {
    const leagueFormat = await LeagueFormat.findByPk(formatId);
    if (leagueFormat) {
        await leagueFormat.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findLeagueFormatById,
    createLeagueFormat,
    updateLeagueFormat,
    deleteLeagueFormat,
};