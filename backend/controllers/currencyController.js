const currencyService = require('../services/currencyService');

/**
 * Currency Controller
 * Handles HTTP requests related to the `Currency` model.
 */
class CurrencyController {
    /**
     * Create a new currency.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createCurrency(req, res) {
        try {
            const currency = await currencyService.createCurrency(req.body);
            res.status(201).json(currency);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a currency by its code.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getCurrencyByCode(req, res) {
        try {
            const currency = await currencyService.getCurrencyByCode(req.params.currencyCode);
            if (currency) {
                res.status(200).json(currency);
            } else {
                res.status(404).json({ message: 'Currency not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all currencies.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllCurrencies(req, res) {
        try {
            const currencies = await currencyService.getAllCurrencies();
            res.status(200).json(currencies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a currency by its code.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateCurrency(req, res) {
        try {
            const currency = await currencyService.updateCurrency(req.params.currencyCode, req.body);
            if (currency) {
                res.status(200).json({ message: 'Currency updated successfully' });
            } else {
                res.status(404).json({ message: 'Currency not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a currency by its code.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteCurrency(req, res) {
        try {
            const result = await currencyService.deleteCurrency(req.params.currencyCode);
            if (result) {
                res.status(200).json({ message: 'Currency deleted successfully' });
            } else {
                res.status(404).json({ message: 'Currency not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CurrencyController();