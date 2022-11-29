const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// Error: Cannot find module 'cloudinary'
// Require stack:
// - /Users/bradleyjester 1/bootcamp/project-two/controllers/home-routes.js
// - /Users/bradleyjester 1/bootcamp/project-two/controllers/index.js
// - /Users/bradleyjester 1/bootcamp/project-two/server.js

// The Cloudinary Code Is Making It So I Can't Start A Node.js Server Right Now, I'm Commenting It Out For Right Now So I Can View Things In The Meantime

/*
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Art_cart',
    allowedFormats: ['jpg', 'png'],
  },
});
 
const parser = multer({ storage: storage });

*/

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

router.get('/upload', withAuth, async (req, res) => {
  try {
    res.render('upload');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ReferenceError: parser is not defined

/*

router.post('/upload', parser.single('image'), function (req, res) {
  res.json(req.file);
});

*/

// Account Route //

router.get('/account', withAuth, async (req, res) => {
  try {
    const socialData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const socialPost = socialData.map((post) => post.get({ plain: true }));
    console.log(socialPost);
    res.render('account', {
      layout: 'main',
      socialPost,
      loggedIn: req.session.loggedIn,
    });
    console.log(req.session.user_id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
