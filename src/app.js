'use strict'

//const config = require('./config')
const path = require('path')
const express = require('express')
const app = express()
const utils = require('require-all')(path.join(__dirname, 'utils'))
const log = utils.logger

log.info('App Starting...')

app.get('/', (req, res) => {
    log.info('Accessed /')
    res.send('Hello');
})

module.exports = app
