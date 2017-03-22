'use strict'

const log = require('../utils/logger')

var express = require('express');
var router = new express.Router();

router.get('/', (req, res) => {
    log.info(`Accessed /`)
    res.send('Hello');
})

module.exports = router