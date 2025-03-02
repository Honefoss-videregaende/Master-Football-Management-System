const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * StaffRole Model
 * Represents the `StaffRole` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const StaffRole = sequelize.define('StaffRole', {
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique staff role identifier'
    },
    roleName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Staff role name (e.g., Team Manager, Physio, Scout, Analyst)'
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'Description of the staff role and duties'
    }
}, {
    tableName: 'StaffRole', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of non-coaching staff roles within a football organization'
});

module.exports = StaffRole;