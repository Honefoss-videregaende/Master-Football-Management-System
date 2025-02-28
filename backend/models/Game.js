const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Game Model
 * Represents the `Game` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Game = sequelize.define('Game', {
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique game identifier'
    },
    homeTeamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Team - home team reference'
    },
    awayTeamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Team - away team reference'
    },
    homeTeamScore: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: 'Home team score'
    },
    awayTeamScore: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: 'Away team score'
    },
    stadiumId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Stadium - hosting stadium'
    },
    gameDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Game date and time'
    },
    competitionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Competition - competition reference'
    },
    statusId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to GameStatus - game status reference'
    },
    attendance: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        comment: 'Spectator count'
    },
    refereeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Referee - assigned referee'
    },
    createdAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        comment: 'Creation timestamp'
    },
    updatedAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        comment: 'Last update timestamp'
    },
    createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Creator user ID'
    },
    updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Last modifier user ID'
    }
}, {
    tableName: 'Game', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores details of individual football games/matches',
    indexes: [
        {
            name: 'idx_game_dates',
            fields: ['gameDateTime'],
            comment: 'Index for querying games by date and time'
        },
        {
            name: 'idx_game_teams',
            fields: ['homeTeamId', 'awayTeamId'],
            comment: 'Index for filtering games by teams involved'
        },
        {
            name: 'idx_game_competition',
            fields: ['competitionId'],
            comment: 'Index for filtering games by competition'
        },
        {
            name: 'idx_game_referee',
            fields: ['refereeId'],
            comment: 'Index for filtering games by referee'
        }
    ],
    validate: {
        differentTeams() {
            if (this.homeTeamId === this.awayTeamId) {
                throw new Error('Home team and away team must be different');
            }
        }
    }
});

module.exports = Game;