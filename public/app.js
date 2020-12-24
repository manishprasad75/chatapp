//Make connection
var socket = io.connect("http://localhost:8080/");

const handle = document.getElementById("handle");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");


//Emit Event
sendBtn.addEventListener("click", function(){
    socket.emit('chat', {
        handle: handle.value,
        message: message.value,
    })
})

message.addEventListener("keypress", function(){
    socket.emit('typing', {
        handle: handle.value,
    })
})


//Listen for events
socket.on('chat', function(data){
    // console.log(data);
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
})

socket.on('typing', function(data){
    feedback.innerHTML = "<p> <em>" + data.handle + "  typing...... </em> </p>";
})