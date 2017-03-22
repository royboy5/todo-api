'use strict'

//const config = require('./config')
const path = require('path')
const express = require('express')
const app = express()
const moment = require('moment')
const utils = require('require-all')(path.join(__dirname, 'utils'))
const log = utils.logger

log.info(`${moment().format('MM-DD-YYYY HH:mm:ss')} - App Starting...`)

app.get('/', (req, res) => {
    log.info(`${moment().format('MM-DD-YYYY HH:mm:ss')} - Accessed /`)
    res.send('Hello');
})

module.exports = app
