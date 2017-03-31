'use strict'

const log = require('../utils/logger')
const Todo = require('../models/todoModel')
const User = require('../models/userModel')

const listTodo = (req, res) => {
    log.info('/listTodo')
    Todo.find({}, (err, todo) => {
        if (err) throw err
        res.send(todo)
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
        .then( inDb => {
            
            if (!inDb) {
                return user.save().then( user => { console.log(user.username) })
            } 
            
            return Promise.resolve(user)
            
        })
        .catch( err => { log.error(err) })

    return Promise.resolve(user)

}

const addTodo = (user, todo) => {
    let newTodo = new Todo({
        userId: user._id,
        username: user.username,
        todo: todo,
        isComplete: false
    })

    newTodo.save()
        .then( todo => { log.info(`Todo saved: ${todo}`) })
        .catch( err => { log.error(err) })

    return Promise.resolve(newTodo)

}

const refTodo = todo => {
    
}

const setupTodo = (req, res) => {

    log.info('/setup')

    // Sample todos
    let user1 = new User({ username: 'test1', password: 'pass1' })
    let user2 = new User({ username: 'test2', password: 'pass2' })
    let user3 = new User({ username: 'test3', password: 'pass3' })

    createUserP(user1).then( user => { addTodo(user, 'Task1') })
    createUserP(user2).then( user => { addTodo(user, 'Task1') })
    createUserP(user3).then( user => { addTodo(user, 'Task1') })
    
    let users = {user1, user2, user3}

    res.send(users)

}

module.exports.listTodo  = listTodo
module.exports.setupTodo = setupTodo