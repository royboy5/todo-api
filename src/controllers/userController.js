'use strict'

const log = require('../utils/logger')
const User = require('../models/userModel')

const user_list = (req, res) => {
    log.info('user_list')
    User.find({}, (err, user) => {
        if (err) throw err
        res.json(user)
    })
}

module.exports.user_list = user_list