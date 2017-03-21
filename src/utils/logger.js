'use strict'

const config = require('../config')
const winston = require('winston')

// Winston log levels
// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

/**
 * An instance of Winston for logging to console
 * 
 * @type {Winston}
 */
module.exports = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level:             config.logging.level,
            handleExceptions:  true,
            json:              false,
            colorize:          true,
            prettyPrint:       true
        })
    ],
    exitOnError: false
})