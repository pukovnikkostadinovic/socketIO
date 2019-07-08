var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
	socket.on('chat message', (msg)=>{
		io.emit('chat message', msg);
	});
});
http.listen(8000,()=>{
	console.log('listening on *:8000');
});
