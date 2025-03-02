const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * PlayerPosition Model
 * Represents the `PlayerPosition` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const PlayerPosition = sequelize.define('PlayerPosition', {
    positionId: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique player position identifier'
    },
    positionName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Player position name (e.g., Goalkeeper, Defender, Midfielder, Forward)'
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Detailed description of the player position and role'
    }
}, {
    tableName: 'PlayerPosition', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of player positions on the field'
});

module.exports = PlayerPosition;