const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Country = require('./Country'); // Ensure this path is correct

/**
 * Address Model
 * Represents the `Address` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Address = sequelize.define('Address', {
    addressId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique address identifier'
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'Foreign key to Country table, specifying address country',
        references: {
            model: Country,
            key: 'countryId'
        }
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'City name'
    },
    state: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'State/Province name'
    },
    postalCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: 'Postal code or ZIP code'
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: true,
        comment: 'Latitude coordinate for mapping and location services'
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: true,
        comment: 'Longitude coordinate for mapping and location services'
    }
}, {
    tableName: 'Address', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    comment: 'Addresses table to store geographical locations for stadiums and clubs'
});

module.exports = Address;