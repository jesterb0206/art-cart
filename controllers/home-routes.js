const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// Homepage Route //

router.get('/', withAuth, async (req, res) => {
  try {
    const socialData = await Post.findAll({
      include: [User],
    });
    const socialPost = socialData.map((post) => post.get({ plain: true }));
    res.render('home-page', {
      layout: 'home-page-layout',
      socialPost,
      loggedIn: req.session.loggedIn,
    });
    console.log(socialPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Products Route //

router.get('/products', async (req, res) => {
  try {
    res.render('products-page');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Retrieve A Single Product //

router.get('/product', async (req, res) => {
  try {
    res.render('product-details');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login Route //

router.get('/login', async (req, res) => {
  try {
    res.render('login-page');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Upload Route //

router.get('/upload', async (req, res) => {
  try {
    res.render('upload');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// We'll Need An Account Route //

module.exports = router;
