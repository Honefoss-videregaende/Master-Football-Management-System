// models/Season.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Season Model
 * Represents the `Season` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Season = sequelize.define('Season', {
    seasonId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique season identifier. Automatically generated.',
    },
    seasonCode: {
        type: DataTypes.CHAR(9),
        allowNull: false,
        unique: true,
        comment: 'Season code (e.g., 2023/2024), format YYYY/YYYY.',
        validate: {
            is: /^[0-9]{4}\/[0-9]{4}$/, // Regex to enforce the format YYYY/YYYY
        },
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'Season start date.',
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'Season end date.',
        validate: {
            isAfterStartDate(value) {
                if (value <= this.startDate) {
                    throw new Error('End date must be after the start date.');
                }
            },
        },
    },
}, {
    tableName: 'Season', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Defines football seasons, typically annual cycles.',
});

module.exports = Season;