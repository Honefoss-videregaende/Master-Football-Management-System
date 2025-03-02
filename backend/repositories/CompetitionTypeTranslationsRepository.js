// repositories/competitionTypeTranslationsRepository.js
const CompetitionTypeTranslations = require('../models/CompetitionTypeTranslations');

/**
 * Find a competition type translation by its unique ID.
 * @param {number} translationId - The ID of the competition type translation to find.
 * @returns {Promise<CompetitionTypeTranslations>} - The competition type translation object if found, otherwise null.
 */
const findCompetitionTypeTranslationById = async (translationId) => {
    return await CompetitionTypeTranslations.findByPk(translationId);
};

/**
 * Create a new competition type translation in the database.
 * @param {object} competitionTypeTranslationData - The competition type translation data to insert into the database.
 * @returns {Promise<CompetitionTypeTranslations>} - The newly created competition type translation object.
 */
const createCompetitionTypeTranslation = async (competitionTypeTranslationData) => {
    return await CompetitionTypeTranslations.create(competitionTypeTranslationData);
};

/**
 * Update an existing competition type translation in the database.
 * @param {number} translationId - The ID of the competition type translation to update.
 * @param {object} competitionTypeTranslationData - The updated competition type translation data.
 * @returns {Promise<CompetitionTypeTranslations>} - The updated competition type translation object if found, otherwise null.
 */
const updateCompetitionTypeTranslation = async (translationId, competitionTypeTranslationData) => {
    const competitionTypeTranslation = await CompetitionTypeTranslations.findByPk(translationId);
    if (competitionTypeTranslation) {
        return await competitionTypeTranslation.update(competitionTypeTranslationData);
    }
    return null;
};

/**
 * Delete a competition type translation from the database.
 * @param {number} translationId - The ID of the competition type translation to delete.
 * @returns {Promise<boolean>} - True if the competition type translation was deleted, otherwise false.
 */
const deleteCompetitionTypeTranslation = async (translationId) => {
    const competitionTypeTranslation = await CompetitionTypeTranslations.findByPk(translationId);
    if (competitionTypeTranslation) {
        await competitionTypeTranslation.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findCompetitionTypeTranslationById,
    createCompetitionTypeTranslation,
    updateCompetitionTypeTranslation,
    deleteCompetitionTypeTranslation,
};