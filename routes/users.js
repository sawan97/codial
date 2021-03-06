const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.get('/profile',usersController.profile);
router.get('/likes',usersController.likes);
router.get('/comment',usersController.comment);


module.exports = router;