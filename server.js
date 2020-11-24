// import 'mongoose'
const express = require("express");
// const path = require("path");
// const http = require("http");
// const socketio = require("socket.io");

const app = express();
// const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.send("Server is up and working!");
});

// app.use(path.join(__dirname, ''));

app.listen(PORT, () => console.log(`Server is up on port ${PORT}!`));
// const socket = socketio(server);

// socket.on("connection", socket => {
//     console.log("New WS connection!");

//     socket.emit("message", "Welcome to Poké Raider!");
// });
