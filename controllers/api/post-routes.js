const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({ plain: true }));
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;