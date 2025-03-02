const seasonArchiveService = require('../services/seasonArchiveService');

/**
 * SeasonArchive Controller
 * Handles HTTP requests related to the `SeasonArchive` model.
 */
class SeasonArchiveController {
    /**
     * Create a new season archive.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createSeasonArchive(req, res) {
        try {
            const seasonArchive = await seasonArchiveService.createSeasonArchive(req.body);
            res.status(201).json(seasonArchive);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a season archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getSeasonArchiveById(req, res) {
        try {
            const seasonArchive = await seasonArchiveService.getSeasonArchiveById(req.params.seasonArchiveId);
            if (seasonArchive) {
                res.status(200).json(seasonArchive);
            } else {
                res.status(404).json({ message: 'Season archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all season archives.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllSeasonArchives(req, res) {
        try {
            const seasonArchives = await seasonArchiveService.getAllSeasonArchives();
            res.status(200).json(seasonArchives);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a season archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateSeasonArchive(req, res) {
        try {
            const seasonArchive = await seasonArchiveService.updateSeasonArchive(req.params.seasonArchiveId, req.body);
            if (seasonArchive) {
                res.status(200).json({ message: 'Season archive updated successfully' });
            } else {
                res.status(404).json({ message: 'Season archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a season archive by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteSeasonArchive(req, res) {
        try {
            const result = await seasonArchiveService.deleteSeasonArchive(req.params.seasonArchiveId);
            if (result) {
                res.status(200).json({ message: 'Season archive deleted successfully' });
            } else {
                res.status(404).json({ message: 'Season archive not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SeasonArchiveController();