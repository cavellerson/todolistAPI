const express = require('express')
const app = express();
const session = require('express-session')
const cors = require('cors')
const client = require('./db')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv')
dotenv.config();

app.use(express.json()); // allows access to req.body
app.use(express.static('public'))
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
	})
)

app.use(cors())


const todolistsController = require('./controllers/todolist_controller.js')
app.use('/todolist', todolistsController)

const sessionsController = require('./controllers/sessions_controllers/sessions_controller.js')
app.use('/session', sessionsController)

const usersController = require('./controllers/users_controllers/users_controller.js')
app.use('/users', usersController)

app.get('/', (req, res, next) => {
	res.send("GET /todolist , POST /todolist description, username, completed, GET /todolist/task/:taskNumber , DELETE /todolist/delete/:taskNumber, PUT /todolist/edit/:taskNumber")
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})
