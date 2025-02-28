const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Competition Model
 * Represents the `Competition` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Competition = sequelize.define('Competition', {
    competitionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique competition identifier'
    },
    competitionName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Name of the competition'
    },
    typeId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to CompetitionType - category of the competition'
    },
    seasonId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Season - season in which the competition is held'
    },
    formatId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to LeagueFormat - format of the competition (e.g., league, cup)'
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Competition start date'
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Competition end date'
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
    tableName: 'Competition', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Football competitions, detailing name, type, season, format, and schedule',
    indexes: [
        {
            name: 'idx_competition_season',
            fields: ['seasonId'],
            comment: 'Index for filtering competitions by season'
        }
    ]
});

module.exports = Competition;