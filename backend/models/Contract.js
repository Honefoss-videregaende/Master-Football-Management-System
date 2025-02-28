const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

/**
 * Contract Model
 * Represents the `Contract` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Contract = sequelize.define('Contract', {
    contractId: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Unique contract identifier'
    },
    playerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Player - player under contract'
    },
    teamId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Team - team the player is contracted to'
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Contract start date'
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Contract end date'
    },
    currency: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'Currency code for salary - Foreign key to Currency'
    },
    weeklySalary: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        comment: 'Weekly salary amount'
    },
    releaseClause: {
        type: DataTypes.DECIMAL(15, 2),
        comment: 'Optional release clause amount for contract buyout'
    },
    isActive: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        comment: 'Indicates if the contract is currently active (0 = false, 1 = true)'
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
    tableName: 'Contract', // Explicitly set the table name
    timestamps: true, // Enable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Stores player contracts with financial terms, duration, and club affiliations',
    indexes: [
        {
            name: 'idx_contract_player_team_dates',
            fields: ['playerId', 'teamId', 'startDate', 'endDate'],
            comment: 'Index for efficient querying of contracts by player, team, and date ranges'
        },
        {
            name: 'idx_contract_dates',
            fields: ['startDate', 'endDate'],
            comment: 'Index for date-based contract queries'
        }
    ]
});

module.exports = Contract;