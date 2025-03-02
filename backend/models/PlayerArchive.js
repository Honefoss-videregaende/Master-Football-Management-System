const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Player = require('./Player'); // Ensure this path is correct

/**
 * PlayerArchive Model
 * Represents the `PlayerArchive` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const PlayerArchive = sequelize.define('PlayerArchive', {
    ...Player.rawAttributes, // Copy attributes from Player model
    archivedAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        comment: 'Timestamp of when the player record was archived'
    }
}, {
    tableName: 'PlayerArchive', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Archive table for historical player data'
});

module.exports = PlayerArchive;