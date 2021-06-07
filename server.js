const express = require('express')
const app = express();
const PORT = 3000;
const dotenv = require('dotenv')
dotenv.config();

app.use(express.json()); // allows access to req.body
app.use(express.static('public'))

const todolistsController = require('./controllers/todolist_controller.js')
app.use('/todolist', todolistsController)

const sessionsController = require('./controllers/sessions_controllers/sessions_controller.js')
app.use('/session', sessionsController)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
