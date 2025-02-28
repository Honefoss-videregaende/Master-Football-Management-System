const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Goal Model
 * Represents the `Goal` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Goal = sequelize.define('Goal', {
    goalId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique goal identifier'
    },
    gameId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Game - game in which the goal was scored'
    },
    scorerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player who scored the goal'
    },
    assistId: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Foreign key to Player - player who assisted, if any'
    },
    minute: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1,
            max: 120
        },
        comment: 'Minute of the goal (1-120 minutes)'
    },
    type: {
        type: DataTypes.ENUM('Open Play', 'Penalty', 'Free Kick', 'Header', 'Own Goal'),
        allowNull: false,
        comment: 'Type of goal scored'
    },
    videoUrl: {
        type: DataTypes.STRING(255),
        comment: 'URL for VAR review footage (if applicable)'
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
    tableName: 'Goal', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Details of goals scored in a game, including scorer, assister, and goal type',
    indexes: [
        {
            name: 'unique_goal',
            unique: true,
            fields: ['gameId', 'minute', 'scorerId', 'assistId', 'type']
        }
    ]
});

module.exports = Goal;