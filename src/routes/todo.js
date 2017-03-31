'use strict'

const express = require('express');
const router = new express.Router();

const todoController = require('../controllers/todoController')

router.get('/', todoController.listTodo)
router.get('/setup', todoController.setupTodo)

module.exports = router
