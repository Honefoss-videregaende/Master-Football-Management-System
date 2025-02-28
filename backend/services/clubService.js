// services/clubService.js
// @ts-ignore
const clubRepository = require('../repositories/clubRepository');

/**
 * Create a new club.
 * @param {object} clubData - The club data to create.
 * @returns {Promise<Club>} - The newly created club object.
 * @throws {Error} - If the FIFA ID or NFF ID already exists or validation fails.
 */
const createClub = async (clubData) => {
    if (clubData.fifaId) {
        const existingClub = await clubRepository.findClubByFifaId(clubData.fifaId);
        if (existingClub) {
            throw new Error('Club with this FIFA ID already exists');
        }
    }
    return await clubRepository.createClub(clubData);
};

/**
 * Update an existing club.
 * @param {number} clubId - The ID of the club to update.
 * @param {object} clubData - The updated club data.
 * @returns {Promise<Club>} - The updated club object.
 * @throws {Error} - If the club is not found or validation fails.
 */
const updateClub = async (clubId, clubData) => {
    const club = await clubRepository.updateClub(clubId, clubData);
    if (!club) {
        throw new Error('Club not found');
    }
    return club;
};

/**
 * Delete a club.
 * @param {number} clubId - The ID of the club to delete.
 * @returns {Promise<boolean>} - True if the club was deleted, otherwise false.
 * @throws {Error} - If the club is not found.
 */
const deleteClub = async (clubId) => {
    const isDeleted = await clubRepository.deleteClub(clubId);
    if (!isDeleted) {
        throw new Error('Club not found');
    }
    return true;
};

/**
 * Get a club by its ID.
 * @param {number} clubId - The ID of the club to retrieve.
 * @returns {Promise<Club>} - The club object.
 * @throws {Error} - If the club is not found.
 */
const getClubById = async (clubId) => {
    const club = await clubRepository.findClubById(clubId);
    if (!club) {
        throw new Error('Club not found');
    }
    return club;
};

/**
 * Get a club by its FIFA ID.
 * @param {string} fifaId - The FIFA ID of the club to retrieve.
 * @returns {Promise<Club>} - The club object.
 * @throws {Error} - If the club is not found.
 */
const getClubByFifaId = async (fifaId) => {
    const club = await clubRepository.findClubByFifaId(fifaId);
    if (!club) {
        throw new Error('Club not found');
    }
    return club;
};

module.exports = {
    createClub,
    updateClub,
    deleteClub,
    getClubById,
    getClubByFifaId,
};