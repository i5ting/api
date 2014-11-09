var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var multer  = require('multer')

// for raw data
app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

app.use(multer({ 
	dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var config = require('./config');
var mock_api = require('./middleware');
var data = require('./data');

var token_get_request = data.token_get_request
var token_post_request = data.token_post_request
	
app.use(mock_api(token_get_request));
app.use(mock_api(token_post_request));
	 

app.get('/',function(req,res){
    res.send('hello,Api Sever!');
});


app.listen(config.server.port);

module.exports = app;
