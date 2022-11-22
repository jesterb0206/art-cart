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

router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        post_title: req.body.post_title,
        post_body: req.body.post_body,
        user_id: req.body.user_id,
      });
  
      req.session.save(() => {
        // req.session.user_id = userData.id;
        // req.session.logged_in = true;
  
        res
          .status(200)
          .json({ user: postData, message: 'Postmates' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;