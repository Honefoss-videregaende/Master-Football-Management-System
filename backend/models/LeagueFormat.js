const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * LeagueFormat Model
 * Represents the `LeagueFormat` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const LeagueFormat = sequelize.define('LeagueFormat', {
    formatId: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique league format identifier'
    },
    formatName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'League format name (e.g., League, Cup, Knockout, Groups)'
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Description of the league format and structure'
    }
}, {
    tableName: 'LeagueFormat', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of competition formats, defining league structures'
});

module.exports = LeagueFormat;