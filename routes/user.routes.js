const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/new', userController.get_new);

router.post('/new', userController.post_new);

router.get('/login', userController.get_login);

router.post('/login', userController.post_login);

router.get('/logout', userController.logout);

module.exports = router;