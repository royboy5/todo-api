'use strict'

const db = require('../utils/db')
const Schema = db.Schema

const todoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: Schema.Types.String, ref: 'User' },
    todo: String,
    isComplete: Boolean
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const model = db.model('Todo', todoSchema)

module.exports = model