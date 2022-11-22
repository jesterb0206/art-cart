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

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    });

    req.save(() => {
      res.status(200).json({ user: commentData, message: 'comment made!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
