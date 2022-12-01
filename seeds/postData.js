//dependencies
const { Post } = require('../models');
// seeded data for individual artwork
const postData = [
  {
    post_title: 'By the Coast - Seascape Oil Painting by Darko Topalski',
    post_img: 'test img 2',
    post_price: 217.0,
    post_medium: 'Oil on Canvas',
    post_size: '20" x 28"',
    post_year: 2018,
    post_signed: true,
    user_id: 2,
  },
  {
    post_title: 'Uncle Billy',
    post_img: '12345',
    post_price: 666.23,
    post_medium: 'oil on canvas',
    post_size: '36 x 24 inches framed',
    post_year: 2020,
    post_signed: true,
    user_id: 1,
  },
];

const seedposts = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
//export from seedposts
module.exports = seedposts;
