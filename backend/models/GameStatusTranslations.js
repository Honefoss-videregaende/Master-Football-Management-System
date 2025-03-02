const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const GameStatus = require('./GameStatus'); // Ensure this path is correct

/**
 * GameStatusTranslations Model
 * Represents the `GameStatusTranslations` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const GameStatusTranslations = sequelize.define('GameStatusTranslations', {
    translationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique translation identifier'
    },
    statusId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to GameStatus',
        references: {
            model: GameStatus,
            key: 'statusId'
        }
    },
    languageCode: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        comment: 'ISO 639-1 language code'
    },
    translatedName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: 'Game status name in the specified language'
    }
}, {
    tableName: 'GameStatusTranslations', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    indexes: [
        {
            unique: true,
            fields: ['statusId', 'languageCode']
        }
    ],
    comment: 'Translations for GameStatus names for multilingual support'
});

module.exports = GameStatusTranslations;