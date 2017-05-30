'use strict'

const db = require('../utils/db.js')
const Schema = db.Schema

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        minlength: 2,
        required: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        minlength: 3,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
        select: false
    },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const model = db.model('User', userSchema)

module.exports = model