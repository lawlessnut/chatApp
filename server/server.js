const path = require("path");
const publicPath = path.join(__dirname,"../public");
const express = require('express');
const http = require("http");
const socketIO = require("socket.io");

const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath));

io.on("connection",(socket)=>{
    console.log("new User connected")

    socket.on("disconnect", ()=>{
        console.log("user was disconnected");
    })
})

server.listen(PORT,()=>{
    console.log("server started");
});
