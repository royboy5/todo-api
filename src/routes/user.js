'use strict'

const express = require('express');
const router = new express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.user_list)
router.get('/:user', userController.user_list)

module.exports = router