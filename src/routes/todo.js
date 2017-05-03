'use strict'

const express = require('express');
const router = new express.Router();

const todoController = require('../controllers/todoController')

router.get('/', todoController.todo_list)
router.get('/setup', todoController.setupTodo)

module.exports = router