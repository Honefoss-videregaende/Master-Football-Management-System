const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * User Model
 * Represents the `User` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'System-wide unique user ID. Automatically generated.',
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Login username for system access. Must be unique.',
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        comment: 'User email address. Must be unique.',
    },
    passwordHash: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: 'BCrypt hashed password for secure authentication.',
    },
    salt: {
        type: DataTypes.STRING(255),
        comment: 'Salt used for password hashing. Enhances security by making hashes unique.',
    },
    resetToken: {
        type: DataTypes.STRING(255),
        comment: 'Token generated for password reset functionality.',
    },
    resetExpires: {
        type: DataTypes.DATE,
        comment: 'Expiration date and time for the password reset token.',
    },
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key referencing the `UserRole` table. Defines user permissions.',
    },
    isActive: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Soft delete flag. 0 = inactive, 1 = active. Used for logical deletion.',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Timestamp when the user record was created.',
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        comment: 'Timestamp when the user record was last updated.',
    },
    createdBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'User ID of the creator. Used for audit purposes.',
    },
    updatedBy: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'User ID of the last modifier. Used for audit purposes.',
    },
}, {
    tableName: 'User', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'System users table with authentication, authorization, and audit trails.',
    indexes: [
        {
            name: 'idx_user_email',
            fields: ['email'],
            comment: 'Index for faster email lookups during login and password recovery.',
        },
        {
            name: 'idx_user_role',
            fields: ['roleId'],
            comment: 'Index for efficient filtering of users by role.',
        },
    ],
});

module.exports = User;