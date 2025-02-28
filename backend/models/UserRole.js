// models/UserRole.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * UserRole Model
 * Represents the `UserRole` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const UserRole = sequelize.define('UserRole', {
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique role identifier. Automatically generated.',
    },
    roleName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        comment: 'Role display name (e.g., Admin, Editor, User). Must be unique.',
    },
    description: {
        type: DataTypes.STRING(255),
        comment: 'Detailed role description.',
    },
    isAdmin: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: 'Flag for system administration roles (0 = false, 1 = true).',
    },
}, {
    tableName: 'UserRole', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Enumeration of user roles within the system for access control.',
});

module.exports = UserRole;