const seasonArchiveRepository = require('../repositories/seasonArchiveRepository');

/**
 * SeasonArchive Service
 * Handles business logic related to the `SeasonArchive` model.
 */
class SeasonArchiveService {
    /**
     * Create a new season archive.
     * @param {Object} seasonArchiveData - Data for the new season archive.
     * @returns {Promise<Object>} The created season archive.
     */
    async createSeasonArchive(seasonArchiveData) {
        return await seasonArchiveRepository.createSeasonArchive(seasonArchiveData);
    }

    /**
     * Get a season archive by its ID.
     * @param {number} seasonArchiveId - The ID of the season archive.
     * @returns {Promise<Object|null>} The season archive, or null if not found.
     */
    async getSeasonArchiveById(seasonArchiveId) {
        return await seasonArchiveRepository.findSeasonArchiveById(seasonArchiveId);
    }

    /**
     * Update a season archive by its ID.
     * @param {number} seasonArchiveId - The ID of the season archive.
     * @param {Object} seasonArchiveData - The new data for the season archive.
     * @returns {Promise<Object>} The updated season archive.
     */
    async updateSeasonArchive(seasonArchiveId, seasonArchiveData) {
        return await seasonArchiveRepository.updateSeasonArchive(seasonArchiveId, seasonArchiveData);
    }

    /**
     * Delete a season archive by its ID.
     * @param {number} seasonArchiveId - The ID of the season archive.
     * @returns {Promise<boolean>} True if the season archive was deleted, otherwise false.
     */
    async deleteSeasonArchive(seasonArchiveId) {
        return await seasonArchiveRepository.deleteSeasonArchive(seasonArchiveId);
    }
}

module.exports = new SeasonArchiveService();