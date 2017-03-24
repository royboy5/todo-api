'use strict'

const log = require('../utils/logger')
const Todo = require('../models/todoModel')

const listTodo = (req, res) => {
    log.info('/sample')
    Todo.find({}, (err, todo) => {
        if (err) throw err
        res.send(todo)
    })
}

const setupTodo = (req, res) => {
    log.info('/setup')
    let starterSamples = [
        {
            username: 'test1'
        },
        {
            username: 'test2'
        },
        {
            username: 'test3'
        }
    ];
        
    Todo.create(starterSamples, (err, results) => {
        if (err) throw err;
        res.send(results);
    });

}

module.exports.listTodo  = listTodo
module.exports.setupTodo = setupTodo