const User = require('./User');
const Post = require('./Post');

// AS WE CREATE MORE MODELS WE'LL NEED TO REQUIRE THEM HERE** DB

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
foreignKey: "user_id"
});


// AS WE DEVELOP MORE MODELS WE'LL NEED TO CREATE ASSOCIATIONS** DB

module.exports = { User, Post };