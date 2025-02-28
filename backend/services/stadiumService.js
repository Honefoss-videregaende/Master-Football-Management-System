// services/stadiumService.js
// @ts-ignore
const stadiumRepository = require('../repositories/stadiumRepository');

/**
 * Create a new stadium.
 * @param {object} stadiumData - The stadium data to create.
 * @returns {Promise<Stadium>} - The newly created stadium object.
 * @throws {Error} - If the FIFA ID already exists or validation fails.
 */
const createStadium = async (stadiumData) => {
    if (stadiumData.fifaId) {
        const existingStadium = await stadiumRepository.findStadiumByFifaId(stadiumData.fifaId);
        if (existingStadium) {
            throw new Error('Stadium with this FIFA ID already exists');
        }
    }
    return await stadiumRepository.createStadium(stadiumData);
};

/**
 * Update an existing stadium.
 * @param {number} stadiumId - The ID of the stadium to update.
 * @param {object} stadiumData - The updated stadium data.
 * @returns {Promise<Stadium>} - The updated stadium object.
 * @throws {Error} - If the stadium is not found or validation fails.
 */
const updateStadium = async (stadiumId, stadiumData) => {
    const stadium = await stadiumRepository.updateStadium(stadiumId, stadiumData);
    if (!stadium) {
        throw new Error('Stadium not found');
    }
    return stadium;
};

/**
 * Delete a stadium.
 * @param {number} stadiumId - The ID of the stadium to delete.
 * @returns {Promise<boolean>} - True if the stadium was deleted, otherwise false.
 * @throws {Error} - If the stadium is not found.
 */
const deleteStadium = async (stadiumId) => {
    const isDeleted = await stadiumRepository.deleteStadium(stadiumId);
    if (!isDeleted) {
        throw new Error('Stadium not found');
    }
    return true;
};

/**
 * Get a stadium by its ID.
 * @param {number} stadiumId - The ID of the stadium to retrieve.
 * @returns {Promise<Stadium>} - The stadium object.
 * @throws {Error} - If the stadium is not found.
 */
const getStadiumById = async (stadiumId) => {
    const stadium = await stadiumRepository.findStadiumById(stadiumId);
    if (!stadium) {
        throw new Error('Stadium not found');
    }
    return stadium;
};

/**
 * Get a stadium by its FIFA ID.
 * @param {string} fifaId - The FIFA ID of the stadium to retrieve.
 * @returns {Promise<Stadium>} - The stadium object.
 * @throws {Error} - If the stadium is not found.
 */
const getStadiumByFifaId = async (fifaId) => {
    const stadium = await stadiumRepository.findStadiumByFifaId(fifaId);
    if (!stadium) {
        throw new Error('Stadium not found');
    }
    return stadium;
};

module.exports = {
    createStadium,
    updateStadium,
    deleteStadium,
    getStadiumById,
    getStadiumByFifaId,
};