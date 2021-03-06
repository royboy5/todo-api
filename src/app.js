'use strict'

//const config = require('./config')
const path = require('path')
const utils = require('require-all')(path.join(__dirname, 'utils'))
const routes = require('require-all')(path.join(__dirname, 'routes'))

const log = utils.logger

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

log.info('App Starting...')

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use('/', routes.home)
app.use('/todos', routes.todo)
app.use('/users', routes.user)
app.use('/sample', routes.sample)

module.exports = app