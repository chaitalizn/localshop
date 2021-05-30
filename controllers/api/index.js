const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const industryRoutes = require('./industry-routes');
const productRoutes = require('./product-routes');
const hoursRoutes = require('./hours-routes.js')

router.use('/users', userRoutes);
router.use('/industry', industryRoutes);
router.use('/product', productRoutes);
router.use('/hours', hoursRoutes);

module.exports = router;