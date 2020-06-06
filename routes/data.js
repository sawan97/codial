const express = require('express');
const router = express.Router();

const dataController = require('../controllers/data_controller');

router.post('/', dataController.home);

module.exports = router;