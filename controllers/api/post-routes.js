// Dependencies

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

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {});
    if (!postData) {
      res.status(404).json({ message: 'Nothing found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      post_title: req.body.post_title,
      post_img: req.body.post_img,
      post_price: req.body.post_price,
      post_medium: req.body.post_medium,
      post_size: req.body.post_size,
      post_year: req.body.post_year,
      post_signed: req.body.post_signed,
      user_id: req.body.post_id,
    });

    req.session.save(() => {
      res.status(200).json({ user: postData, message: 'Postmates' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
