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
    // Added date_created to our post model
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
      // For Module 14 Challenge I just did:
      // user_id: {
      //    type: DataTypes.INTEGER,
      //    allowNull: false,
      //  },
      // Now I'm questioning if I'm doing that part right on the Challenge
    },
  },
  {
    sequelize,
    // I set this to false
    timestamps: false,
    freezeTableName: true,
    // I believe 'underscored: true' makes everything in snake case
    underscored: true,
    modelName: 'Post',
  }
);

module.exports = Post;
