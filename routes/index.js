const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/delete-data/', homeController.delete);
router.use('/users', require('./users'));
router.use('/data', require('./data'));

module.exports = router;