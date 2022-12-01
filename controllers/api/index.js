const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

//export router

module.exports = router;
