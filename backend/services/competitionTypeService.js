// services/competitionTypeService.js
// @ts-ignore
const competitionTypeRepository = require('../repositories/competitionTypeRepository');

/**
 * Create a new competition type.
 * @param {object} typeData - The competition type data to create.
 * @returns {Promise<CompetitionType>} - The newly created competition type object.
 * @throws {Error} - If the competition type name already exists.
 */
const createType = async (typeData) => {
    const existingType = await competitionTypeRepository.findTypeByName(typeData.typeName);
    if (existingType) {
        throw new Error('Competition type with this name already exists');
    }
    return await competitionTypeRepository.createType(typeData);
};

/**
 * Update an existing competition type.
 * @param {number} typeId - The ID of the competition type to update.
 * @param {object} typeData - The updated competition type data.
 * @returns {Promise<CompetitionType>} - The updated competition type object.
 * @throws {Error} - If the competition type is not found.
 */
const updateType = async (typeId, typeData) => {
    const type = await competitionTypeRepository.updateType(typeId, typeData);
    if (!type) {
        throw new Error('Competition type not found');
    }
    return type;
};

/**
 * Delete a competition type.
 * @param {number} typeId - The ID of the competition type to delete.
 * @returns {Promise<boolean>} - True if the competition type was deleted, otherwise false.
 * @throws {Error} - If the competition type is not found.
 */
const deleteType = async (typeId) => {
    const isDeleted = await competitionTypeRepository.deleteType(typeId);
    if (!isDeleted) {
        throw new Error('Competition type not found');
    }
    return true;
};

/**
 * Get a competition type by its ID.
 * @param {number} typeId - The ID of the competition type to retrieve.
 * @returns {Promise<CompetitionType>} - The competition type object.
 * @throws {Error} - If the competition type is not found.
 */
const getTypeById = async (typeId) => {
    const type = await competitionTypeRepository.findTypeById(typeId);
    if (!type) {
        throw new Error('Competition type not found');
    }
    return type;
};

/**
 * Get a competition type by its name.
 * @param {string} typeName - The name of the competition type to retrieve.
 * @returns {Promise<CompetitionType>} - The competition type object.
 * @throws {Error} - If the competition type is not found.
 */
const getTypeByName = async (typeName) => {
    const type = await competitionTypeRepository.findTypeByName(typeName);
    if (!type) {
        throw new Error('Competition type not found');
    }
    return type;
};

module.exports = {
    createType,
    updateType,
    deleteType,
    getTypeById,
    getTypeByName,
};