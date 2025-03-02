const competitionTypeTranslationsRepository = require('../repositories/competitionTypeTranslationsRepository');

/**
 * CompetitionTypeTranslations Service
 * Handles business logic related to the `CompetitionTypeTranslations` model.
 */
class CompetitionTypeTranslationsService {
    /**
     * Create a new competition type translation.
     * @param {Object} competitionTypeTranslationData - Data for the new competition type translation.
     * @returns {Promise<Object>} The created competition type translation.
     */
    async createCompetitionTypeTranslation(competitionTypeTranslationData) {
        return await competitionTypeTranslationsRepository.createCompetitionTypeTranslation(competitionTypeTranslationData);
    }

    /**
     * Get a competition type translation by its ID.
     * @param {number} translationId - The ID of the competition type translation.
     * @returns {Promise<Object|null>} The competition type translation, or null if not found.
     */
    async getCompetitionTypeTranslationById(translationId) {
        return await competitionTypeTranslationsRepository.findCompetitionTypeTranslationById(translationId);
    }

    /**
     * Update a competition type translation by its ID.
     * @param {number} translationId - The ID of the competition type translation.
     * @param {Object} competitionTypeTranslationData - The new data for the competition type translation.
     * @returns {Promise<Object>} The updated competition type translation.
     */
    async updateCompetitionTypeTranslation(translationId, competitionTypeTranslationData) {
        return await competitionTypeTranslationsRepository.updateCompetitionTypeTranslation(translationId, competitionTypeTranslationData);
    }

    /**
     * Delete a competition type translation by its ID.
     * @param {number} translationId - The ID of the competition type translation.
     * @returns {Promise<boolean>} True if the competition type translation was deleted, otherwise false.
     */
    async deleteCompetitionTypeTranslation(translationId) {
        return await competitionTypeTranslationsRepository.deleteCompetitionTypeTranslation(translationId);
    }
}

module.exports = new CompetitionTypeTranslationsService();