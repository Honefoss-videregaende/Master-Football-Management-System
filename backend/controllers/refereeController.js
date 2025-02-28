// controllers/refereeController.js
// @ts-ignore
const refereeService = require('../services/refereeService');

/**
 * Handle creating a new referee.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createReferee = async (req, res) => {
    try {
        const referee = await refereeService.createReferee(req.body);
        res.status(201).json(referee); // Return the newly created referee
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing referee.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateReferee = async (req, res) => {
    try {
        const refereeId = req.params.refereeId;
        const referee = await refereeService.updateReferee(refereeId, req.body);
        res.status(200).json(referee); // Return the updated referee
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a referee.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteReferee = async (req, res) => {
    try {
        const refereeId = req.params.refereeId;
        await refereeService.deleteReferee(refereeId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a referee by their ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getRefereeById = async (req, res) => {
    try {
        const refereeId = req.params.refereeId;
        const referee = await refereeService.getRefereeById(refereeId);
        res.status(200).json(referee); // Return the referee
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createReferee,
    updateReferee,
    deleteReferee,
    getRefereeById,
};