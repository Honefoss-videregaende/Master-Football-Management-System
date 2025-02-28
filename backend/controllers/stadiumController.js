// controllers/stadiumController.js
// @ts-ignore
const stadiumService = require('../services/stadiumService');

/**
 * Handle creating a new stadium.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createStadium = async (req, res) => {
    try {
        const stadium = await stadiumService.createStadium(req.body);
        res.status(201).json(stadium); // Return the newly created stadium
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing stadium.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateStadium = async (req, res) => {
    try {
        const stadiumId = req.params.stadiumId;
        const stadium = await stadiumService.updateStadium(stadiumId, req.body);
        res.status(200).json(stadium); // Return the updated stadium
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a stadium.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteStadium = async (req, res) => {
    try {
        const stadiumId = req.params.stadiumId;
        await stadiumService.deleteStadium(stadiumId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a stadium by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getStadiumById = async (req, res) => {
    try {
        const stadiumId = req.params.stadiumId;
        const stadium = await stadiumService.getStadiumById(stadiumId);
        res.status(200).json(stadium); // Return the stadium
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a stadium by its FIFA ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getStadiumByFifaId = async (req, res) => {
    try {
        const fifaId = req.params.fifaId;
        const stadium = await stadiumService.getStadiumByFifaId(fifaId);
        res.status(200).json(stadium); // Return the stadium
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createStadium,
    updateStadium,
    deleteStadium,
    getStadiumById,
    getStadiumByFifaId,
};