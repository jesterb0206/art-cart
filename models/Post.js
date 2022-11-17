const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        post_body:{
            type: DataTypes.STRING,
            allowNull: false
        },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post',

    }
);

module.exports = Post;
