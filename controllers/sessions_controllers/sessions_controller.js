const express = require('express');
const sessions = express.Router();
const pool = require('../../db')

sessions.post('/', async(req, res) => {
    try {



    } catch (err) {
        console.error(console.err)
    }
})

module.exports = sessions;
