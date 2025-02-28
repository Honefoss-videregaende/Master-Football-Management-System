// models/Stadium.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Stadium Model
 * Represents the `Stadium` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Stadium = sequelize.define('Stadium', {
    stadiumId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique stadium identifier. Automatically generated.',
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Country table, indicating stadium location.',
    },
    officialName: {
        type: DataTypes.STRING(150),
        allowNull: false,
        comment: 'Legal official stadium name.',
    },
    fifaId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'FIFA stadium code (if officially recognized by FIFA).',
    },
    addressId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Address table, detailing stadium address.',
    },
    capacity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Seating capacity (range: 1000-150000).',
        validate: {
            min: 1000,
            max: 150000,
        },
    },
    pitchLength: {
        type: DataTypes.DECIMAL(5, 2),
        comment: 'Pitch length in meters (range: 90-120m, FIFA standard).',
        validate: {
            min: 90,
            max: 120,
        },
    },
    pitchWidth: {
        type: DataTypes.DECIMAL(5, 2),
        comment: 'Pitch width in meters (range: 45-90m, FIFA standard).',
        validate: {
            min: 45,
            max: 90,
        },
    },
    builtYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Year stadium was built (minimum year 1860).',
        validate: {
            min: 1860,
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
    tableName: 'Stadium', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Football stadiums with detailed information including capacity and dimensions.',
    indexes: [
        {
            name: 'idx_stadium_fifaId',
            fields: ['fifaId'],
            comment: 'Index for lookups using FIFA stadium codes.',
        },
    ],
});

module.exports = Stadium;