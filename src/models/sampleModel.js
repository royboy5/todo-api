'use strict'

const db = require('../utils/db')
const Schema = db.Schema

const sampleSchema = new Schema({
    username: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const model = db.model('Sample', sampleSchema)

module.exports = model