// const express = require('express');
// const sessions = express.Router();
// const client = require('../../db')
// const session = require('express-session')
// 
// sessions.post('/login', async(req, res) => {
//     try {
//
//         const queryUsername = await client.query("SELECT username FROM usernames WHERE username = $1", [req.body.username])
//
//         const queryPassword = await client.query("SELECT password FROM usernames WHERE username = $1", [req.body.username])
//
//         const foundUsername = queryUsername["rows"][0]
//
//         const foundPassword = queryPassword["rows"][0]
//
//         // console.log({foundUsername, foundPassword});
//         if (!foundUsername) {
//             res.send("Username not found")
//         }
//         if (bcrypt.compareSync(req.body.password, foundPassword)) {
//             req.session.currentUser = [foundUsername, foundPassword]
//             res.redirect('/todolist')
//         } else {
//             res.redirect('/login')
//         }
//     } catch (err) {
//         console.error(err)
//     }
// })
//
// sessions.delete('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/login')
//     })
// })
//
// module.exports = sessions;
