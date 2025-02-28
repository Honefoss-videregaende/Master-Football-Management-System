// repositories/competitionTypeRepository.js
// @ts-ignore
const CompetitionType = require('../models/CompetitionType');

/**
 * Find a competition type by its unique ID.
 * @param {number} typeId - The ID of the competition type to find.
 * @returns {Promise<CompetitionType>} - The competition type object if found, otherwise null.
 */
const findTypeById = async (typeId) => {
    return await CompetitionType.findByPk(typeId);
};

/**
 * Find a competition type by its name.
 * @param {string} typeName - The name of the competition type to find.
 * @returns {Promise<CompetitionType>} - The competition type object if found, otherwise null.
 */
const findTypeByName = async (typeName) => {
    return await CompetitionType.findOne({ where: { typeName } });
};

/**
 * Create a new competition type in the database.
 * @param {object} typeData - The competition type data to insert into the database.
 * @returns {Promise<CompetitionType>} - The newly created competition type object.
 */
const createType = async (typeData) => {
    return await CompetitionType.create(typeData);
};

/**
 * Update an existing competition type in the database.
 * @param {number} typeId - The ID of the competition type to update.
 * @param {object} typeData - The updated competition type data.
 * @returns {Promise<CompetitionType>} - The updated competition type object if found, otherwise null.
 */
const updateType = async (typeId, typeData) => {
    const type = await CompetitionType.findByPk(typeId);
    if (type) {
        return await type.update(typeData);
    }
    return null;
};

/**
 * Delete a competition type from the database.
 * @param {number} typeId - The ID of the competition type to delete.
 * @returns {Promise<boolean>} - True if the competition type was deleted, otherwise false.
 */
const deleteType = async (typeId) => {
    const type = await CompetitionType.findByPk(typeId);
    if (type) {
        await type.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findTypeById,
    findTypeByName,
    createType,
    updateType,
    deleteType,
};