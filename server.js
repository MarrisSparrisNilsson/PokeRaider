// import 'mongoose'
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const socket = socketio(server)

socket.on('connection', socket => {
    console.log('New WS connection!');

    socket.emit('message', 'Welcome to Poké Raider!')
    
})

app.listen(port, () => `Server is up on port ${port}`)