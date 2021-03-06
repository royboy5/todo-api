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
            uri: getenv('DB_URI', '')
        }
    },

    token: {
        secret: getenv('TOKEN_SECRET', 'no secret'),
        expires: getenv('TOKEN_EXPIRATION_DAYS', 1)
    }

}