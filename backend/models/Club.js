// models/Club.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Club Model
 * Represents the `Club` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Club = sequelize.define('Club', {
    clubId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique club identifier. Automatically generated.',
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Country table - club country of origin.',
    },
    addressId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        comment: 'Foreign key to Address table - club headquarters address (nullable if no HQ address).',
    },
    officialName: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        comment: 'Official legal club name. Must be unique.',
    },
    shortName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Commonly used short club name. Must be unique.',
    },
    founded: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Year the club was founded.',
        validate: {
            min: 1850, // Founded year must be at least 1850
            max: new Date().getFullYear(), // Founded year cannot exceed the current year
        },
    },
    homeStadiumId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Stadium - primary home stadium of the club.',
    },
    fifaId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'FIFA club code (if officially recognized by FIFA).',
    },
    nffId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'National federation ID (if registered with national federation).',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Record creation timestamp.',
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        comment: 'Last update timestamp.',
    },
    createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of creator.',
    },
    updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of last modifier.',
    },
}, {
    tableName: 'Club', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Football clubs and their foundational details, affiliations, and home venue.',
    indexes: [
        {
            name: 'idx_club_fifaId',
            fields: ['fifaId'],
            comment: 'Index for lookups using FIFA club codes.',
        },
    ],
});

module.exports = Club;