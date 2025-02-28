const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Team Model
 * Represents the `Team` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Team = sequelize.define('Team', {
    teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique team identifier'
    },
    clubId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Club - club to which the team belongs'
    },
    teamName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Season-specific team name (e.g., Senior Team 2024, U19 Youth)'
    },
    seasonId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Season - season in which the team participates'
    },
    division: {
        type: DataTypes.ENUM('Senior', 'U21', 'U19', 'Reserves'),
        allowNull: false,
        defaultValue: 'Senior',
        comment: 'Team division (Senior, U21, U19, Reserves)'
    },
    createdAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        comment: 'Record creation timestamp'
    },
    updatedAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        comment: 'Last update timestamp'
    },
    createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of creator'
    },
    updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of last modifier'
    }
}, {
    tableName: 'Team', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Teams participating in competitions, defined by club, season, and division'
});

module.exports = Team;