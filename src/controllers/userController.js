'use strict'

const log = require('../utils/logger')
const User = require('../models/userModel')

// returns a list of all users
const user_list = (req, res) => {
    log.info('user_list')
    log.info(req.params.user)
    User.find({}, (err, user) => {
        if (err) throw err
        res.json(user)
    })
}

// gets a single user via GET
const user_get = (req, res) => {
    res.send(`NOT IMPLEMENTED! ${req.params.user}`)
}

// creates a user via POST
const user_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED! User create POST')
}

// deletes a user via POST
const user_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED! User delete POST')
}

// updates a user via POST
const user_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED! User update POST')
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
module.exports.user_get = user_get
module.exports.user_create_post = user_create_post;
module.exports.user_delete_post = user_delete_post;
module.exports.user_update_post = user_update_post;