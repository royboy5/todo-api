'use strict'

const express = require('express');
const router = new express.Router();

const todoController = require('../controllers/todoController')

router.get('/', todoController.list)

module.exports = router

