const express = require('express');
const users = express.Router();
const client = require('../../db.js')
const bcrypt = require('bcrypt')

users.post('/create', async(req,res) => {
    try {

        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

        const createUser = await client.query("INSERT INTO usernames (username, password) VALUES ($1,$2) RETURNING *",[req.body.username, req.body.password])

        res.json(createUser["rows"][0])
    } catch (err) {
        console.error(err)
    }

})


module.exports = users;
