const { Post } = require('../models');

const postData = [
  {
    post_title: 'By the Coast - Seascape Oil Painting by Darko Topalski',
    post_img: 'test img 2',
    post_price: 217.0,
    post_medium: 'oil on canvas',
    post_size: '20" x 28',
    post_year: 2018,
    post_signed: true,
    user_id: 1,
  },
  {
    post_title: 'test title',
    post_img: 'test img 2',
    post_price: 523.23,
    post_medium: 'thoughts and prayers',
    post_size: 'as big as you want',
    post_year: 1800,
    post_signed: true,
    user_id: 1,
  },
];

const seedposts = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedposts;
