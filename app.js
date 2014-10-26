var express = require('express');
var app = express();
var config = require('./config');
 
var mock_api = require('./middleware');

var data = require('./data');
var token_get_request = data.token_get_request
var token_post_request = data.token_post_request
	
app.use(mock_api(token_get_request));
app.use(mock_api(token_post_request));
	 

app.get('/',function(req,res){
    res.send('hello,world');
});


app.listen(config.server.port);

module.exports = app;
