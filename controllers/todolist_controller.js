const express = require('express')
const todolist = express.Router();
const client = require("../db")

todolist.get('/', async(req, res) => {
    try {
        const allTasks = await client.query("SELECT * FROM todolist;")
        console.log(allTasks["rows"]);
        res.json(allTasks["rows"])
    } catch (err) {
        console.error(console.err)
    }



})

todolist.post('/', (req, res) => {

        const description = req.body.description;
        const username = req.body.username;
        const completed = req.body.completed;

        const newTask = client.query("INSERT INTO todolist (description, username, completed) VALUES($1,$2,$3) RETURNING * ;", [description, username, completed])
        res.json(newTask)


})

todolist.get('/task/:taskNumber', (req, res) => {

        const taskNumber = req.params.taskNumber;

        const specificTask = client.query("SELECT * FROM todolist WHERE task_id = $1;", [taskNumber])
        res.json(specificTask["rows"])

})

todolist.delete('/delete/:taskNumber', (req, res) => {
        const taskNumber = req.params.taskNumber
        const specificTask = client.query("DELETE FROM todolist WHERE task_id = $1;", [taskNumber])
        res.json(specificTask["rows"])

})

todolist.put('/edit/:taskNumber', async(req, res) => {
    try {
        const description = req.body.description
        const completed = req.body.completed
        const taskNumber = req.params.taskNumber
        const specificTask = client.query("UPDATE todolist SET description = $1, completed = $2 WHERE task_id = $3", [description, completed, taskNumber])
        res.json(specificTask["rows"])
    } catch (err) {
        console.error(err)
    }
})

module.exports = todolist;
