'use strict'

const db = require('../utils/db.js')
const Schema = db.Schema

const userSchema = new Schema({
    username: { type: String, lowercase: true },
    password: String,
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const model = db.model('User', userSchema)

module.exports = model