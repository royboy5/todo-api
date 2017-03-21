'use strict'

//const config = require('./config')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello');
})

module.exports = app
