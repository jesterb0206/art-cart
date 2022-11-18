const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// AS WE CREATE MORE MODELS WE'LL NEED TO REQUIRE THEM HERE** DB

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// AS WE DEVELOP MORE MODELS WE'LL NEED TO CREATE ASSOCIATIONS** DB

module.exports = { User, Comment, Post };
