const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * SeasonArchive Model
 * Represents the `SeasonArchive` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const SeasonArchive = sequelize.define('SeasonArchive', {
    seasonId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique season identifier (Archive)'
    },
    seasonCode: {
        type: DataTypes.CHAR(9),
        allowNull: false,
        unique: true,
        comment: 'Season code (e.g., 2023/2024), format YYYY/YYYY (Archive)'
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Season start date (Archive)'
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Season end date (Archive)'
    },
    archivedAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        comment: 'Timestamp of when the season was archived'
    }
}, {
    tableName: 'SeasonArchive', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Archive table for historical season data, retaining season information'
});

module.exports = SeasonArchive;