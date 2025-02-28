const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * GameEvent Model
 * Represents the `GameEvent` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const GameEvent = sequelize.define('GameEvent', {
    eventId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique game event identifier'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game to which the event belongs'
    },
    minute: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1,
            max: 120
        },
        comment: 'Minute of the event (1-120 minutes)'
    },
    eventType: {
        type: DataTypes.ENUM('Penalty', 'Free Kick', 'Corner Kick', 'Offside', 'Throw-in', 'Injury'),
        allowNull: false,
        comment: 'Type of game event'
    },
    description: {
        type: DataTypes.STRING(255),
        comment: 'Description of the event'
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
    tableName: 'GameEvent', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Logs various events occurring during a game, such as penalties or offsides',
    indexes: [
        {
            name: 'unique_game_event',
            unique: true,
            fields: ['gameId', 'minute', 'eventType', 'description']
        }
    ]
});

module.exports = GameEvent;