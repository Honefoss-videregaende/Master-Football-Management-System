const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserRole = require('./UserRole'); // Ensure this path is correct

/**
 * UserRoleTranslations Model
 * Represents the `UserRoleTranslations` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const UserRoleTranslations = sequelize.define('UserRoleTranslations', {
    translationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique translation identifier'
    },
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to UserRole',
        references: {
            model: UserRole,
            key: 'roleId'
        }
    },
    languageCode: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        comment: 'ISO 639-1 language code (e.g., en, es, fr)'
    },
    translatedName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: 'Role name in the specified language'
    }
}, {
    tableName: 'UserRoleTranslations', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    indexes: [
        {
            unique: true,
            fields: ['roleId', 'languageCode']
        }
    ],
    comment: 'Translations for UserRole names in different languages for localization'
});

module.exports = UserRoleTranslations;