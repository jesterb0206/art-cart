// Dependency

const { Comment } = require('../models');

const commentData = [
  {
    comment: 'this is a test comment',
    user_id: 1,
    post_id: 2,
  },
  {
    comment: 'this is a 2nd test comment',
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () =>
  Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedComments;
