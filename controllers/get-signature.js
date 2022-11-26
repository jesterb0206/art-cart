const router = require('express').Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config()
const Post = require('../models')

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDINARYSECRET,
  secure: true
})

function passwordProtected(req, res, next) {
  res.set("WWW-Authenticate", "Basic realm='Cloudinary Front-end Upload'")
  if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
    next()
  } else {
    res.status(401).send("Try again")
  }
}

router.use(passwordProtected)

router.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <form id="upload-form">
        <input id="file-field" type="file" />
        <button>Upload</button>
      </form>
      <hr />
      <a href="/view-photos">How would I use the public_id values that I store in my database?</a>
   </script>
      <script src="/client-side.js"></script>
    </body>
  </html>`)
})

router.get("/get-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp
    },
    cloudinaryConfig.api_secret
  )
  res.json({ timestamp, signature })
})

exports.createPost = async (req, res, next) => {
  const { post_title, post_img, post_price, post_medium, post_size, post_year, post_signed } = req.body;
  try {
    const result = await cloudinary.uploader.upload(post_img, {
      folder: 'products',
      width: 400,
      crop: 'scale'
    })
    const newPost = await Post.create({
      post_title,
      post_img: {
        public_id: result.public_id,
        url: result.secure_url
      },
      post_price,
      post_medium,
      post_size,
      post_year,
      post_signed

    });
    res.status(200).json({
      success: true,
      newPost
    })

    module.exports = router;