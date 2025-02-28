const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * LeagueTable Model
 * Represents the `LeagueTable` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const LeagueTable = sequelize.define('LeagueTable', {
    leagueTableId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique league table identifier'
    },
    competitionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Competition - competition for the league table'
    },
    teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Team - team in the league table'
    },
    points: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Total points earned by the team in the competition'
    },
    wins: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of wins in the competition'
    },
    draws: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of draws in the competition'
    },
    losses: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of losses in the competition'
    },
    goalsFor: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Total goals scored in the competition'
    },
    goalsAgainst: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Total goals conceded in the competition'
    },
    goalDifference: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Goal difference (goalsFor - goalsAgainst)'
    },
    gamesPlayed: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: 'Number of games played in the competition'
    }
}, {
    tableName: 'LeagueTable', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores league standings for each team in a competition',
    indexes: [
        {
            name: 'unique_league_table',
            unique: true,
            fields: ['competitionId', 'teamId']
        }
    ]
});

module.exports = LeagueTable;