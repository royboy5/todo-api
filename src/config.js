'use strict'

const getenv = require('getenv');

// Enter all config options here

module.exports = {

    logging: {
        level: getenv('LOG_LEVEL', 'debug'),
        query: true
    },

    db: {
        mongodb: {
            uri: 'mongodb://test:test@ds137370.mlab.com:37370/node-base'
        }
    }

}