var express = require('express');
var app = express();
var config = require('./config');

app.get('/',function(req,res){
    res.send('hello,world');
});


app.listen(config.server.port);

module.exports = app;
