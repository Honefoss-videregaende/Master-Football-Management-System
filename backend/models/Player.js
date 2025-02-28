const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Player Model
 * Represents the `Player` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Player = sequelize.define('Player', {
    playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique player identifier'
    },
    personId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Person - linking to personal details'
    },
    positionId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to PlayerPosition - player\'s primary position'
    },
    height: {
        type: DataTypes.TINYINT.UNSIGNED,
        validate: {
            min: 50,
            max: 250
        },
        comment: 'Height in centimeters (e.g., 160-195)'
    },
    weight: {
        type: DataTypes.TINYINT.UNSIGNED,
        validate: {
            min: 40,
            max: 200
        },
        comment: 'Weight in kilograms (e.g., 65-90)'
    },
    preferredFoot: {
        type: DataTypes.ENUM('Left', 'Right', 'Both'),
        defaultValue: 'Right',
        comment: 'Preferred playing foot'
    },
    fifaId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'FIFA player identifier (if available)'
    },
    nffId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'National federation player identifier (if available)'
    },
    status: {
        type: DataTypes.ENUM('active', 'injured', 'suspended', 'retired'),
        allowNull: false,
        defaultValue: 'active',
        comment: 'Player\'s current playing status'
    },
    contractStatus: {
        type: DataTypes.ENUM('active', 'loaned', 'retired', 'free agent'),
        allowNull: false,
        defaultValue: 'active',
        comment: 'Player\'s contract status'
    },
    createdAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        comment: 'Record creation timestamp'
    },
    updatedAt: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        comment: 'Last update timestamp'
    },
    createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of creator'
    },
    updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Audit: user ID of last modifier'
    }
}, {
    tableName: 'Player', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Detailed information about football players, including physical attributes and status',
    indexes: [
        {
            name: 'idx_player_fifaId',
            fields: ['fifaId'],
            comment: 'Index for lookups using FIFA player IDs'
        },
        {
            name: 'idx_player_positionId',
            fields: ['positionId'],
            comment: 'Index for filtering players by their positions'
        }
    ]
});

module.exports = Player;