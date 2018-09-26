var express = require('express');
var app = express();
var path = require('path');
app.use('/img', express.static(__dirname + '/img'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/vendor', express.static(__dirname + '/vendor'));
// viewed at http://localhost:8080
app.use('/index.html', express.static(__dirname + '/index.html'));

app.listen(8080);