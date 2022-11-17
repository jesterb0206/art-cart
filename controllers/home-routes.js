const router = require('express').Router();
const { Post, User } = require('../models');

//GET all from homepage
router.get('/', async (req, res) => {

    try {
        const socialData = await Post.findAll({
            include: [{
                model: User
            }]
        })
        const socialPost = socialData.map((post) =>
            post.get({ plain: true }));
        res.json(socialPost)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

