const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Country = require('./Country'); // Ensure this path is correct

/**
 * Person Model
 * Represents the `Person` table in the database.
 * Defines the structure of the table, including fields, data types, and constraints.
 */
const Person = sequelize.define('Person', {
    personId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Unique person identifier'
    },
    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        comment: 'Foreign key to Country table - person nationality (nullable for stateless)',
        references: {
            model: Country,
            key: 'countryId'
        }
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Person first name'
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Person last name'
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Date of birth'
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female', 'Other'),
        allowNull: true,
        comment: 'Gender of the person (optional)'
    }
}, {
    tableName: 'Person', // Explicitly set the table name
    timestamps: false, // Disable automatic timestamps (`createdAt` and `updatedAt`)
    indexes: [
        {
            name: 'idx_person_names',
            fields: ['lastName', 'firstName'],
            comment: 'Index to optimize searches by last name and first name'
        }
    ],
    comment: 'General persons table to store individuals involved in football, nationality and basic personal details'
});

module.exports = Person;