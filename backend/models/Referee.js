// models/Referee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Referee Model
 * Represents the `Referee` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Referee = sequelize.define('Referee', {
    refereeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique referee identifier. Automatically generated.',
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Referee first name.',
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Referee last name.',
    },
    licenseLevel: {
        type: DataTypes.ENUM('fifa', 'national', 'regional'),
        allowNull: false,
        comment: 'Referee licensing level (FIFA, National, Regional).',
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Country table - referee nationality.',
    },
    careerStart: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'Start date of refereeing career.',
        validate: {
            isDate: true,
            isAfter: '1950-01-01', // Career start must be after 1950-01-01
            isBefore: new Date().toISOString().split('T')[0], // Career start must be before today
        },
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
    tableName: 'Referee', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Football referees and their professional details, including licensing and career information.',
});

module.exports = Referee;