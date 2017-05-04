'use strict'

const log = require('../utils/logger')
const User = require('../models/userModel')

// returns a list of all users
const user_list = (req, res) => {
    log.info('user_list')
    log.info(req.body)
    User.find({}, (err, user) => {
        if (err) throw err
        res.json(user)
    })
}

// creates a user via POST
const user_create_post = (req, res) => {

}

// Using promises
/*const createUser = user => {

    User.findOne({ username: user.username })
        .then(inDb => {

            if (!inDb) {
                return user.save().then(user => {
                    log.info(user.username)
                })
            }

            return Promise.resolve(user)

        })
        .catch(err => { log.error(err) })

    return Promise.resolve(user)

}*/

module.exports.user_list = user_list
module.exports.user_create_post = user_create_post;