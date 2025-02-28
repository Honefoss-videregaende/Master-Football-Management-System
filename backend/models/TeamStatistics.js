const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * TeamStatistics Model
 * Represents the `TeamStatistics` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const TeamStatistics = sequelize.define('TeamStatistics', {
    statisticId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique statistic identifier'
    },
    teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Team - team for which statistics are recorded'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game for which statistics are recorded'
    },
    possession: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0.00,
        comment: 'Team possession percentage in the game'
    },
    shotsOnTarget: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Shots on target by the team in the game'
    },
    shotsOffTarget: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Shots off target by the team in the game'
    },
    foulsCommitted: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Fouls committed by the team in the game'
    },
    corners: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Corner kicks taken by the team in the game'
    },
    offsides: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Offsides committed by the team in the game'
    }
}, {
    tableName: 'TeamStatistics', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores game-specific statistics for teams',
    indexes: [
        {
            name: 'unique_team_statistics',
            unique: true,
            fields: ['teamId', 'gameId']
        }
    ]
});

module.exports = TeamStatistics;