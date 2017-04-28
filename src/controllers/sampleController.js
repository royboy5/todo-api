'use strict'

const log = require('../utils/logger')
const Sample = require('../models/sampleModel')

const sampleCtrl = (req, res) => {
    log.info('/sample')
    Sample.find({}, (err, sample) => {
        if (err) throw err
        res.send(sample)
    })
}

const setupDb = (req, res) => {
    log.info('/setup')
    let starterSamples = [{
            username: 'test1'
        },
        {
            username: 'test2'
        },
        {
            username: 'test3'
        }
    ];

    Sample.create(starterSamples, (err, results) => {
        if (err) throw err
        res.send(results)
    });

}

module.exports.sampleCtrl = sampleCtrl
module.exports.setupDb = setupDb