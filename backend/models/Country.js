const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Country Model
 * Represents the `Country` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Country = sequelize.define('Country', {
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique country identifier'
    },
    countryCode: {
        type: DataTypes.CHAR(3),
        unique: true,
        allowNull: true,
        comment: 'ISO 3166-1 alpha-3 code (e.g., USA, BRA) - nullable for stateless nations'
    },
    countryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        comment: 'Country name'
    },
    isStateless: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: 'Indicates if the nation is stateless (0 = false, 1 = true)'
    }
}, {
    tableName: 'Country', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'List of countries, conforming to ISO 3166-1 standards'
});

module.exports = Country;