// repositories/seasonArchiveRepository.js
const SeasonArchive = require('../models/SeasonArchive');

/**
 * Find a season archive by its unique ID.
 * @param {number} seasonArchiveId - The ID of the season archive to find.
 * @returns {Promise<SeasonArchive>} - The season archive object if found, otherwise null.
 */
const findSeasonArchiveById = async (seasonArchiveId) => {
    return await SeasonArchive.findByPk(seasonArchiveId);
};

/**
 * Create a new season archive in the database.
 * @param {object} seasonArchiveData - The season archive data to insert into the database.
 * @returns {Promise<SeasonArchive>} - The newly created season archive object.
 */
const createSeasonArchive = async (seasonArchiveData) => {
    return await SeasonArchive.create(seasonArchiveData);
};

/**
 * Update an existing season archive in the database.
 * @param {number} seasonArchiveId - The ID of the season archive to update.
 * @param {object} seasonArchiveData - The updated season archive data.
 * @returns {Promise<SeasonArchive>} - The updated season archive object if found, otherwise null.
 */
const updateSeasonArchive = async (seasonArchiveId, seasonArchiveData) => {
    const seasonArchive = await SeasonArchive.findByPk(seasonArchiveId);
    if (seasonArchive) {
        return await seasonArchive.update(seasonArchiveData);
    }
    return null;
};

/**
 * Delete a season archive from the database.
 * @param {number} seasonArchiveId - The ID of the season archive to delete.
 * @returns {Promise<boolean>} - True if the season archive was deleted, otherwise false.
 */
const deleteSeasonArchive = async (seasonArchiveId) => {
    const seasonArchive = await SeasonArchive.findByPk(seasonArchiveId);
    if (seasonArchive) {
        await seasonArchive.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findSeasonArchiveById,
    createSeasonArchive,
    updateSeasonArchive,
    deleteSeasonArchive,
};