const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Substitution Model
 * Represents the `Substitution` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Substitution = sequelize.define('Substitution', {
    substitutionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique substitution identifier'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game in which the substitution occurred'
    },
    playerInId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player coming onto the field'
    },
    playerOutId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player leaving the field'
    },
    minute: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1,
            max: 120
        },
        comment: 'Minute of the substitution (1-120 minutes)'
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
    tableName: 'Substitution', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Records player substitutions made during a game',
    indexes: [
        {
            name: 'unique_substitution',
            unique: true,
            fields: ['gameId', 'minute', 'playerInId', 'playerOutId']
        }
    ]
});

module.exports = Substitution;