// controllers/clubController.js
// @ts-ignore
const clubService = require('../services/clubService');

/**
 * Handle creating a new club.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const createClub = async (req, res) => {
    try {
        const club = await clubService.createClub(req.body);
        res.status(201).json(club); // Return the newly created club
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating an existing club.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateClub = async (req, res) => {
    try {
        const clubId = req.params.clubId;
        const club = await clubService.updateClub(clubId, req.body);
        res.status(200).json(club); // Return the updated club
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle deleting a club.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteClub = async (req, res) => {
    try {
        const clubId = req.params.clubId;
        await clubService.deleteClub(clubId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a club by its ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getClubById = async (req, res) => {
    try {
        const clubId = req.params.clubId;
        const club = await clubService.getClubById(clubId);
        res.status(200).json(club); // Return the club
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle retrieving a club by its FIFA ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getClubByFifaId = async (req, res) => {
    try {
        const fifaId = req.params.fifaId;
        const club = await clubService.getClubByFifaId(fifaId);
        res.status(200).json(club); // Return the club
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    createClub,
    updateClub,
    deleteClub,
    getClubById,
    getClubByFifaId,
};