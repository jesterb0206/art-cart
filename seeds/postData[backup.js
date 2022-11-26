const { Post } = require('../models');

const postData = [
  {
    post_title: 'this is a test post',
    post_body: 'bodyodyody',
    user_id: 1,
  },
  {
    post_title: 'this is a 2nd test post',
    post_body: 'body?',
    user_id: 2,
  },
];

const seedposts = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedposts;
