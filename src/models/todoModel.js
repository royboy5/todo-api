'use strict'

const db = require('../utils/db')
const Schema = db.Schema

const todoSchema = new Schema({
    username: String,
    todo: String,
    isComplete: Boolean

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

let model = db.model('Todo', todoSchema)

module.exports = model