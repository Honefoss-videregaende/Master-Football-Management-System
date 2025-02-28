// repositories/clubRepository.js
// @ts-ignore
const Club = require('../models/Club');

/**
 * Find a club by its unique ID.
 * @param {number} clubId - The ID of the club to find.
 * @returns {Promise<Club>} - The club object if found, otherwise null.
 */
const findClubById = async (clubId) => {
    return await Club.findByPk(clubId);
};

/**
 * Find a club by its FIFA ID.
 * @param {string} fifaId - The FIFA ID of the club to find.
 * @returns {Promise<Club>} - The club object if found, otherwise null.
 */
const findClubByFifaId = async (fifaId) => {
    return await Club.findOne({ where: { fifaId } });
};

/**
 * Create a new club in the database.
 * @param {object} clubData - The club data to insert into the database.
 * @returns {Promise<Club>} - The newly created club object.
 */
const createClub = async (clubData) => {
    return await Club.create(clubData);
};

/**
 * Update an existing club in the database.
 * @param {number} clubId - The ID of the club to update.
 * @param {object} clubData - The updated club data.
 * @returns {Promise<Club>} - The updated club object if found, otherwise null.
 */
const updateClub = async (clubId, clubData) => {
    const club = await Club.findByPk(clubId);
    if (club) {
        return await club.update(clubData);
    }
    return null;
};

/**
 * Delete a club from the database.
 * @param {number} clubId - The ID of the club to delete.
 * @returns {Promise<boolean>} - True if the club was deleted, otherwise false.
 */
const deleteClub = async (clubId) => {
    const club = await Club.findByPk(clubId);
    if (club) {
        await club.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findClubById,
    findClubByFifaId,
    createClub,
    updateClub,
    deleteClub,
};