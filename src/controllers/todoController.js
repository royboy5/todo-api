'use strict'

const log = require('../utils/logger')
const Todo = require('../models/todoModel')
const User = require('../models/userModel')

const listTodo = (req, res) => {
    log.info('/listTodo')
    Todo.find({}, (err, todo) => {
        if (err) throw err
        res.json(todo)
    })
}

// Without using promises
/*const createUser = user => {
    User.find({ username: user.username }, (err, docs) => {
        log.info( JSON.stringify(inDb, null, '') )
        if (err) throw err

        if (docs.length) {
            log.error('User already exists')
        } else {
            user.save(err => {
                if (err) throw err;

                let todo = new Todo({
                    username: user._id,
                    todos: 'todo1',
                    isComplete: false
                })

                todo.save( err => {
                    if (err) throw err;
                })
            })
        }
        
    })
}*/

// Using promises
const createUserP = user => {

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

}

const addTodo = (user, todo) => {
    let newTodo = new Todo({
        userId: user._id,
        username: user.username,
        todo: todo,
        isComplete: false
    })

    return Promise.all([
        Promise.resolve(user),
        newTodo.save()
        // .then( todo => { log.info(`Todo saved: ${todo}`) })
        //.catch( err => { log.error(err) })
    ])

}

const refTodo = (user, todo) => {

    log.info(`User: ${user}`)
        // log.info(`Todo: ${todo}`)

    User.findOne({ _id: user._id })
        .then(dbuser => {
            dbuser.todos.push(todo._id)
            log.info(`${dbuser}`)
            return dbuser.save()
        })

    return Promise.resolve(user)
        // .then( () => { log.info(`Todo saved: ${user}`) })
        // .catch( err => { log.error(err) })
}

const setupTodo = (req, res) => {

    log.info('/setup')

    // Sample todos
    let user1 = new User({ username: 'test1', password: 'pass1' })
    let user2 = new User({ username: 'test2', password: 'pass2' })
    let user3 = new User({ username: 'test3', password: 'pass3' })

    createUserP(user1)
        .then(user => {
            addTodo(user, 'User1 Task1')
                .then(([user, todo]) => {
                    refTodo(user, todo)
                })
        })
    createUserP(user2)
        .then(user => {
            addTodo(user, 'User2 Task1')
                .then(([user, todo]) => {
                    refTodo(user, todo)
                })
        })
    createUserP(user3)
        .then(user => {
            addTodo(user, 'User3 Task1')
                .then(([user, todo]) => {
                    refTodo(user, todo)
                })
        })

    //let users = { user1, user2, user3 }

    res.send('created')

}

module.exports.listTodo = listTodo
module.exports.setupTodo = setupTodo