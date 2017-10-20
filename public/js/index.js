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


var locationButton = jQuery("#sendLocation");
locationButton.on("click",(e)=>{


    if(navigator.geolocation){
        locationButton.attr("disabled","disabled").text("Sending Location...")
        navigator.geolocation.getCurrentPosition((function(position){
            locationButton.removeAttr("disabled").text("Send Location");
            socket.emit("createLocationMessage",{
                latitude :position.coords.latitude,
                longitude : position.coords.longitude
            });
        }))
    }else{
        locationButton.removeAttribute("disabled");
    }
})


socket.on("newLocationMessage",(message)=>{
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My Current Location</a>')
    li.text(`${message.from}:`);
    a.attr("href", message.url);
    li.append(a);
    jQuery("#messages").append(li);
})


jQuery("#message-form").on("submit",(e)=>{
    e.preventDefault();
    socket.emit("createMessage",{
        from :"User",
        text : jQuery("[name=message]").val()
    }, function(){
        jQuery("[name=message]").val("")
    })
})