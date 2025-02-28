// models/CompetitionType.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * CompetitionType Model
 * Represents the `CompetitionType` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const CompetitionType = sequelize.define('CompetitionType', {
    typeId: {
        type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique competition type identifier. Automatically generated.',
    },
    typeName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Competition category (e.g., League, Cup, Friendly Tournament). Must be unique.',
    },
    fifaRecognized: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: 'Indicates FIFA recognition (0 = false, 1 = true).',
    },
}, {
    tableName: 'CompetitionType', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Types of football competitions, categorized for organizational purposes.',
});

module.exports = CompetitionType;