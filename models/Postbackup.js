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
    post_body: {
      // VARCHAR(1234), default is VARCHAR(255) I believe
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    // Added date_created to our Post model
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
    modelName: 'post',
  }
);

module.exports = Post;
