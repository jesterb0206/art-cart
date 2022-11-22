const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.id,
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: commentData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});*/

module.exports = router;
