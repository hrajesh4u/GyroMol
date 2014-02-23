var express = require('express');
var path = require('path');
var app = express();
var jgh = require('./jmolGyroHandler');

app.configure(function() {
    app.use(express.static(path.join(__dirname,'public')));
});

var server = Number(process.env.PORT || 5000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    jgh.initHandler(io, socket);
});


