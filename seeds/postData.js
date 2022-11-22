const { Post } = require('../models');

const postData = [
    {

        post_title: 'this is a test post',
        user_id: 1,
        post_id: 2,
    },
    {

        post_title: 'this is a 2nd test post',
        user_id: 2,
        post_id: 3,
    },
];

const seedposts = () =>
    Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedposts;
