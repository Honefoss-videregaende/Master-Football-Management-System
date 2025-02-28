const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * StaffAssignment Model
 * Represents the `StaffAssignment` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const StaffAssignment = sequelize.define('StaffAssignment', {
    assignmentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique assignment identifier'
    },
    staffId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Staff member'
    },
    roleId: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to StaffRole - role in this assignment'
    },
    clubId: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Foreign key to Club (if assigned to a club)'
    },
    teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        comment: 'Foreign key to Team (if assigned to a team)'
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Assignment start date'
    },
    endDate: {
        type: DataTypes.DATE,
        comment: 'Assignment end date (nullable if ongoing)'
    },
    isActive: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Assignment active flag (0 = false, 1 = true)'
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
    tableName: 'StaffAssignment', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Tracks specific assignments of staff to clubs or teams with roles and duration',
    indexes: [
        {
            name: 'idx_staff_assignment_staff_dates',
            fields: ['staffId', 'startDate', 'endDate'],
            comment: 'Index for querying staff assignments by staff and date ranges'
        },
        {
            name: 'idx_staff_assignment_clubId',
            fields: ['clubId'],
            comment: 'Index for filtering staff assignments by club'
        },
        {
            name: 'idx_staff_assignment_teamId',
            fields: ['teamId'],
            comment: 'Index for filtering staff assignments by team'
        }
    ]
});

module.exports = StaffAssignment;