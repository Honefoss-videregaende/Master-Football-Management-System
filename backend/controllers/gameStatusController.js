// controllers/gameStatusController.js
const gameStatusService = require('../services/gameStatusService');

/**
 * Handle creating a new game status.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createStatus = async (req, res) => {
    try {
        const status = await gameStatusService.createStatus(req.body);
        res.status(201).json(status); // Return the newly created game status
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing game status.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateStatus = async (req, res) => {
    try {
        const statusId = req.params.statusId;
        const status = await gameStatusService.updateStatus(statusId, req.body);
        res.status(200).json(status); // Return the updated game status
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a game status.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteStatus = async (req, res) => {
    try {
        const statusId = req.params.statusId;
        await gameStatusService.deleteStatus(statusId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a game status by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getStatusById = async (req, res) => {
    try {
        const statusId = req.params.statusId;
        const status = await gameStatusService.getStatusById(statusId);
        res.status(200).json(status); // Return the game status
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a game status by its name.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getStatusByName = async (req, res) => {
    try {
        const statusName = req.params.statusName;
        const status = await gameStatusService.getStatusByName(statusName);
        res.status(200).json(status); // Return the game status
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createStatus,
    updateStatus,
    deleteStatus,
    getStatusById,
    getStatusByName,
};