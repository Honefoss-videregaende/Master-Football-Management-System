// controllers/seasonController.js
// @ts-ignore
const seasonService = require('../services/seasonService');

/**
 * Handle creating a new season.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createSeason = async (req, res) => {
    try {
        const season = await seasonService.createSeason(req.body);
        res.status(201).json(season); // Return the newly created season
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing season.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateSeason = async (req, res) => {
    try {
        const seasonId = req.params.seasonId;
        const season = await seasonService.updateSeason(seasonId, req.body);
        res.status(200).json(season); // Return the updated season
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a season.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteSeason = async (req, res) => {
    try {
        const seasonId = req.params.seasonId;
        await seasonService.deleteSeason(seasonId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a season by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getSeasonById = async (req, res) => {
    try {
        const seasonId = req.params.seasonId;
        const season = await seasonService.getSeasonById(seasonId);
        res.status(200).json(season); // Return the season
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a season by its code.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getSeasonByCode = async (req, res) => {
    try {
        const seasonCode = req.params.seasonCode;
        const season = await seasonService.getSeasonByCode(seasonCode);
        res.status(200).json(season); // Return the season
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createSeason,
    updateSeason,
    deleteSeason,
    getSeasonById,
    getSeasonByCode,
};