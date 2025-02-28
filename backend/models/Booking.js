const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Booking Model
 * Represents the `Booking` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Booking = sequelize.define('Booking', {
    bookingId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique booking identifier'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game in which the booking occurred'
    },
    playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player who received the booking'
    },
    minute: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1,
            max: 120
        },
        comment: 'Minute of the booking (1-120 minutes)'
    },
    cardType: {
        type: DataTypes.ENUM('Yellow', 'Red'),
        allowNull: false,
        comment: 'Type of card issued (Yellow or Red)'
    },
    reason: {
        type: DataTypes.STRING(255),
        comment: 'Reason for the booking'
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
    tableName: 'Booking', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Records bookings (yellow/red cards) issued to players during a game',
    indexes: [
        {
            name: 'unique_booking',
            unique: true,
            fields: ['gameId', 'minute', 'playerId', 'cardType', 'reason']
        }
    ]
});

module.exports = Booking;