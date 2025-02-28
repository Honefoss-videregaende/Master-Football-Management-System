const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * PlayerStatistics Model
 * Represents the `PlayerStatistics` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const PlayerStatistics = sequelize.define('PlayerStatistics', {
    statisticId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique statistic identifier'
    },
    playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player for whom statistics are recorded'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game for which statistics are recorded'
    },
    goals: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of goals scored by the player in the game'
    },
    assists: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of assists by the player in the game'
    },
    yellowCards: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of yellow cards received by the player in the game'
    },
    redCards: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of red cards received by the player in the game'
    },
    shots: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Total shots taken by the player in the game'
    },
    passes: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of passes completed by the player in the game'
    },
    distanceCovered: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0.00,
        comment: 'Distance covered by the player in kilometers'
    }
}, {
    tableName: 'PlayerStatistics', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores game-specific statistics for individual players',
    indexes: [
        {
            name: 'unique_player_statistics',
            unique: true,
            fields: ['playerId', 'gameId']
        }
    ]
});

module.exports = PlayerStatistics;