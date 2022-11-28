const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

//GET all from homepage
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

router.get('/upload', async (req, res) => {
  try {
    res.render('upload');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// We could add a login page route here
router.get('/login', async (req, res) => {
  try {
    res.render('login-page');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/products', async (req, res) => {
  try {
    res.render('products-page');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/product', async (req, res) => {
  try {
    res.render('product-details');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/cart', async (req, res) => {
  try {
    res.render('cart-page');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// We could also add a logout page route here

// Signup page view route

/*router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('sign-up');
});*/

module.exports = router;
