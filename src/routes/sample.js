'use strict'

const express = require('express');
const router = new express.Router();

const sampleController = require('../controllers/sampleController')

router.get('/', sampleController.sampleCtrl)
router.get('/setup', sampleController.setupDb)

module.exports = router

