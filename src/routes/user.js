'use strict'

const express = require('express');
const router = new express.Router();

const userController = require('../controllers/userController')

router.get('/', userController.user_list)
router.get('/:user', userController.user_get)
router.post('/', userController.user_create_post)
router.patch('/:user', userController.user_update_post)
router.delete('/:user', userController.user_delete_post)

module.exports = router