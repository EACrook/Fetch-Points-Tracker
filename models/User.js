const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the User model
class User extends Model {}

// define table columns
User.init(
    {
        // TABLE COLUMN DEFINITIONS WILL GO HERE
    },
    {
        // TABLE CONFIG OPTIONS GO HERE

        // pass in our imported sequelize connection
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamp: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

model.exports = User;