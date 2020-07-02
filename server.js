// import 'mongoose'
import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const socket = socketio(server)

socket.on('connection', socket => {
    console.log('New WS connection!');
    
})

app.listen(port, () => `Server is up on port ${port}`)