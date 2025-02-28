// services/seasonService.js
// @ts-ignore
const seasonRepository = require('../repositories/seasonRepository');

/**
 * Create a new season.
 * @param {object} seasonData - The season data to create.
 * @returns {Promise<Season>} - The newly created season object.
 * @throws {Error} - If the season code already exists or validation fails.
 */
const createSeason = async (seasonData) => {
    const existingSeason = await seasonRepository.findSeasonByCode(seasonData.seasonCode);
    if (existingSeason) {
        throw new Error('Season with this code already exists');
    }
    return await seasonRepository.createSeason(seasonData);
};

/**
 * Update an existing season.
 * @param {number} seasonId - The ID of the season to update.
 * @param {object} seasonData - The updated season data.
 * @returns {Promise<Season>} - The updated season object.
 * @throws {Error} - If the season is not found or validation fails.
 */
const updateSeason = async (seasonId, seasonData) => {
    const season = await seasonRepository.updateSeason(seasonId, seasonData);
    if (!season) {
        throw new Error('Season not found');
    }
    return season;
};

/**
 * Delete a season.
 * @param {number} seasonId - The ID of the season to delete.
 * @returns {Promise<boolean>} - True if the season was deleted, otherwise false.
 * @throws {Error} - If the season is not found.
 */
const deleteSeason = async (seasonId) => {
    const isDeleted = await seasonRepository.deleteSeason(seasonId);
    if (!isDeleted) {
        throw new Error('Season not found');
    }
    return true;
};

/**
 * Get a season by its ID.
 * @param {number} seasonId - The ID of the season to retrieve.
 * @returns {Promise<Season>} - The season object.
 * @throws {Error} - If the season is not found.
 */
const getSeasonById = async (seasonId) => {
    const season = await seasonRepository.findSeasonById(seasonId);
    if (!season) {
        throw new Error('Season not found');
    }
    return season;
};

/**
 * Get a season by its code.
 * @param {string} seasonCode - The code of the season to retrieve.
 * @returns {Promise<Season>} - The season object.
 * @throws {Error} - If the season is not found.
 */
const getSeasonByCode = async (seasonCode) => {
    const season = await seasonRepository.findSeasonByCode(seasonCode);
    if (!season) {
        throw new Error('Season not found');
    }
    return season;
};

module.exports = {
    createSeason,
    updateSeason,
    deleteSeason,
    getSeasonById,
    getSeasonByCode,
};