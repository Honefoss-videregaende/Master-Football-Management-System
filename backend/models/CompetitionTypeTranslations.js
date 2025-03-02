const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const CompetitionType = require('./CompetitionType'); // Ensure this path is correct

/**
 * CompetitionTypeTranslations Model
 * Represents the `CompetitionTypeTranslations` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const CompetitionTypeTranslations = sequelize.define('CompetitionTypeTranslations', {
    translationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique translation identifier'
    },
    typeId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to CompetitionType',
        references: {
            model: CompetitionType,
            key: 'typeId'
        }
    },
    languageCode: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        comment: 'ISO 639-1 language code'
    },
    translatedName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Competition type name in the specified language'
    }
}, {
    tableName: 'CompetitionTypeTranslations', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    indexes: [
        {
            unique: true,
            fields: ['typeId', 'languageCode']
        }
    ],
    comment: 'Translations for CompetitionType names for internationalization'
});

module.exports = CompetitionTypeTranslations;