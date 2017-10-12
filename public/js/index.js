var socket = io();

socket.on("connect",function(){
    console.log("connect tp server")
});

socket.on("disconnect",function(){
    console.log("server disconnect");
    // alert("Ola its disconnected");
});


socket.on("newMessage", function(message){
    console.log("message",message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}:${message.text}`);
    jQuery("#messages").append(li);
})

/*
socket.emit("createMessage",{
    from : "Frank",
    text :"Hello, This is Frank"
}, function(){
    console.log("Go it");
})
*/

jQuery("#message-form").on("submit",(e)=>{
    e.preventDefault();
    socket.emit("createMessage",{
        from :"User",
        text : jQuery("[name=message]").val()
    }, function(){

    })
})