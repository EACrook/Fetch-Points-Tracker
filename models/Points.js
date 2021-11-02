const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Points extends Model {} 
    Points.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            payer: {
                type: DataTypes.STRING,
                allowNull: false
            },
            points: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'points'
        }
    );

    module.exports = Points;