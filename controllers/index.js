const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', userRoutes);

module.exports = router;
