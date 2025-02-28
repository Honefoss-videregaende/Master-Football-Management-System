const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Staff Model
 * Represents the `Staff` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Staff = sequelize.define('Staff', {
    staffId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique staff identifier'
    },
    personId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Person - linking to personal details'
    },
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to StaffRole - staff member\'s role'
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Country table - staff member\'s nationality'
    },
    specialization: {
        type: DataTypes.STRING(100),
        comment: 'Area of expertise or specialization within their role'
    },
    joinedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Date when the staff member joined the club or team'
    },
    leftDate: {
        type: DataTypes.DATE,
        comment: 'Date when the staff member left, if applicable'
    },
    isActive: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Active status: 0 = inactive, 1 = active'
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
    tableName: 'Staff', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores information about non-playing staff, linking to roles and personal details'
});

module.exports = Staff;