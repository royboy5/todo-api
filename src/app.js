'use strict'

//const config = require('./config')
const path = require('path')
const utils = require('require-all')(path.join(__dirname, 'utils'))
const routes = require('require-all')(path.join(__dirname, 'routes'))

const log = utils.logger

const express = require('express')
const app = express()

log.info('App Starting...')

app.use('/', routes.home)
app.use('/sample', routes.sample)


module.exports = app
