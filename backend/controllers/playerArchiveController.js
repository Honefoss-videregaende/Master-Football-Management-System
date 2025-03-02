const playerArchiveService = require('../services/playerArchiveService');

/**
 * PlayerArchive Controller
 * Handles HTTP requests related to the `PlayerArchive` model.
 */
class PlayerArchiveController {
    /**
     * Create a new player archive.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createPlayerArchive(req, res) {
        try {
            const playerArchive = await playerArchiveService.createPlayerArchive(req.body);
            res.status(201).json(playerArchive);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a player archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getPlayerArchiveById(req, res) {
        try {
            const playerArchive = await playerArchiveService.getPlayerArchiveById(req.params.playerArchiveId);
            if (playerArchive) {
                res.status(200).json(playerArchive);
            } else {
                res.status(404).json({ message: 'Player archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all player archives.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllPlayerArchives(req, res) {
        try {
            const playerArchives = await playerArchiveService.getAllPlayerArchives();
            res.status(200).json(playerArchives);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a player archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updatePlayerArchive(req, res) {
        try {
            const playerArchive = await playerArchiveService.updatePlayerArchive(req.params.playerArchiveId, req.body);
            if (playerArchive) {
                res.status(200).json({ message: 'Player archive updated successfully' });
            } else {
                res.status(404).json({ message: 'Player archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a player archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deletePlayerArchive(req, res) {
        try {
            const result = await playerArchiveService.deletePlayerArchive(req.params.playerArchiveId);
            if (result) {
                res.status(200).json({ message: 'Player archive deleted successfully' });
            } else {
                res.status(404).json({ message: 'Player archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PlayerArchiveController();