'use strict'

const log = require('../utils/logger')
const User = require('../models/userModel')

// returns a list of all users
const user_list = (req, res) => {
    log.info('user_list')
    User.find({}, (err, user) => {
        if (err) throw err
        res.status(200).json(user)
    })
}

// gets a single user via GET
const user_get = (req, res) => {

    log.info(`Get User: ${req.params.user}`)

    User.findOne({ username: req.params.user }).select('+password')
        .then(user => {
            if (user) {
                log.info(`User ${user.username} found!`)
                res.status(200).json(user)
            } else {
                log.error(`User not found!`)
                res.status(404).json({ error: `User ${req.params.user} not found!` })
            }

        })
        .catch(err => { log.error(err) })

}

// creates a user via POST
const user_create_post = (req, res) => {

    log.info('create user via POST')

    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) throw err

        if (user) {
            log.error(`User already exists!`)
            res.status(409).json({ error: `User already exists!` })
        } else {
            log.info(`No user found, creating new user...`)

            let newUser = new User({
                username: req.body.username,
                password: req.body.password
            })

            newUser.save(err => {
                if (err) throw err;
            })

            res.status(201).json(newUser)
        }
    })

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