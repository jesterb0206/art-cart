// Dependencies
 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class Post extends Model {}
 
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    post_medium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post_signed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }

);
//export Post
module.exports = Post;
 
