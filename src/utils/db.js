'use strict'

const config = require('../config')
const mongoose = require('mongoose')
const log = require('./logger')

mongoose.connect( config.db.mongodb.uri, {}, err => {
    
    // Fail if we can't connect to the database
    if ( err ) {
        log.error( err )
    } else if ( config.logging.query )
        log.info( 'Connected to MongoDB' )
    
})

module.exports = mongoose