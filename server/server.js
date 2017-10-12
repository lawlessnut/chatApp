const path = require("path");
const publicPath = path.join(__dirname,"../public");
const express = require('express');
const http = require("http");
const socketIO = require("socket.io");
const { generateMessage } = require("./utils/message");

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



    socket.emit("newMessage",generateMessage("Admin", "Welcome to server!"));

    socket.broadcast.emit("newMessage",{
        from : "Admin",
        text : "new user joined"
    })
    socket.on("createMessage",(message, callback)=>{
        console.log(message)
        callback();
        io.emit("newMessage",generateMessage(message.from, message.text));


        /*socket.broadcast.emit("newMessage",{
            from : message.from,
            text : message.text,
            createAt : new Date().getTime()
        })*/
    })
})

server.listen(PORT,()=>{
    console.log("server started");
});
