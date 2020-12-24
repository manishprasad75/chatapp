var express = require('express');
var socket = require('socket.io');


//App setup
var app = express()

var port = 8080

var server = app.listen(port, function(){
    console.log("server is listening on port " + port);
})


//public folder

app.use(express.static('public'));

//Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log("Made soceket connection")

    socket.on('chat', function(data){
        io.sockets.emit('chat', data); //To send all the client on chat Channel
    })

    socket.on('typing', function(data){
        console.log(data)
        socket.broadcast.emit('typing', data);
    })
})