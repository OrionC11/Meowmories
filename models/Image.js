const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {

}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        },
        post_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }
)
module.exports = Image;