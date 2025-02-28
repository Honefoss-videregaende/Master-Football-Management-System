// models/GameStatus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * GameStatus Model
 * Represents the `GameStatus` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const GameStatus = sequelize.define('GameStatus', {
    statusId: {
        type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique game status identifier. Automatically generated.',
    },
    statusName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        comment: 'FIFA-recognized game state (e.g., Scheduled, Live, Finished, Postponed). Must be unique.',
    },
    isActive: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Status available for scheduling new games (0 = false, 1 = true).',
    },
}, {
    tableName: 'GameStatus', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of game statuses according to FIFA standards.',
});

module.exports = GameStatus;