'use strict'

const db = require('../utils/db')
const Schema = db.Schema

const sampleSchema = new Schema({
    username: String
})

let model = db.model('Sample', sampleSchema)

module.exports = model