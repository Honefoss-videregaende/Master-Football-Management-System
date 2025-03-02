const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Currency Model
 * Represents the `Currency` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Currency = sequelize.define('Currency', {
    currencyCode: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        comment: 'ISO 4217 currency code (e.g., USD, EUR, JPY)'
    },
    currencyName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Currency name'
    },
    symbol: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true,
        comment: 'Currency symbol (e.g., $, €, ¥)'
    }
}, {
    tableName: 'Currency', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'List of currencies, based on ISO 4217 currency codes'
});

module.exports = Currency;