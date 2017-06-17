var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var sys = require('sys')
var exec = require('child_process').exec;



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('on', function(){
    console.log("on");
    exec("gpio -g write 4 0");
  });

  socket.on('off', function(){
    console.log("off");
    exec("gpio -g write 4 0");
  });

});

http.listen(80, function(){
  console.log('listening on *:80');
});