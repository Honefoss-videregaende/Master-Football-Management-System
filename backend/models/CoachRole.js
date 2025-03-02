const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * CoachRole Model
 * Represents the `CoachRole` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const CoachRole = sequelize.define('CoachRole', {
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique coach role identifier'
    },
    roleName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Coach role name (e.g., Head Coach, Assistant Coach, Goalkeeping Coach)'
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Description of the coach role and responsibilities'
    }
}, {
    tableName: 'CoachRole', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of coaching roles within a football team'
});

module.exports = CoachRole;