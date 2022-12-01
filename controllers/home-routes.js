//dependencies
const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');
 
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDINARYSECRET,
});
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Art_cart',
    allowedFormats: ['jpg', 'png'],
  },
});
 
const parser = multer({ storage: storage });
 
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
 
router.post('/upload', parser.single('image'), async  (req, res) => { await
  Post.create({
    post_title: req.body.Title,
    post_img: req.file.path,
    post_price: req.body.Price,
    post_medium: req.body.Medium,
    post_size: req.body.Size,
    post_year: req.body.Year,
    post_signed: req.body.Signed,
    user_id: req.session.user_id
   
  }).then((returnData)=>{
    console.log(returnData)
    res.json(returnData)
  })
  .catch ((err)=> {
    console.log(err);
    res.status(500).json(err);
  })
});
 
 
//testing
// console.log(req.body)
//   // Post.create({
//   //   post
//   // })
 
//   if (!req.file) return res.send({"message":"Please upload a file"});
 
 
//   res.json(req.file);
 
// Account Route //
 
router.get('/account', withAuth, async (req, res) => {
  try {
    const socialData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const socialPost = socialData.map((post) => post.get({ plain: true }));
    console.log(socialPost);
    res.render('account', {
      layout: 'account-page-layout',
      socialPost,
      loggedIn: req.session.loggedIn,
    });
    console.log(req.session.user_id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 
//export router
 
module.exports = router;
