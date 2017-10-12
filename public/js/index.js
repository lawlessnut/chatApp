var socket = io();

socket.on("connect",function(){
    console.log("connect tp server")
    socket.emit("newMessage",{
        from : "Bhumi",
        text : 'Hello Vipul'
    })
});

socket.on("disconnect",function(){
    console.log("server disconnect");
    // alert("Ola its disconnected");
});


socket.on("newMessage", function(message){
    console.log("message",message)
})