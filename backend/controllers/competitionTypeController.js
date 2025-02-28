// controllers/competitionTypeController.js
// @ts-ignore
const competitionTypeService = require('../services/competitionTypeService');

/**
 * Handle creating a new competition type.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createType = async (req, res) => {
    try {
        const type = await competitionTypeService.createType(req.body);
        res.status(201).json(type); // Return the newly created competition type
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing competition type.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateType = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        const type = await competitionTypeService.updateType(typeId, req.body);
        res.status(200).json(type); // Return the updated competition type
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a competition type.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteType = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        await competitionTypeService.deleteType(typeId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a competition type by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getTypeById = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        const type = await competitionTypeService.getTypeById(typeId);
        res.status(200).json(type); // Return the competition type
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a competition type by its name.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getTypeByName = async (req, res) => {
    try {
        const typeName = req.params.typeName;
        const type = await competitionTypeService.getTypeByName(typeName);
        res.status(200).json(type); // Return the competition type
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createType,
    updateType,
    deleteType,
    getTypeById,
    getTypeByName,
};