var express = require('express');
var app = express();
var config = require('./config');
 

var token_request = {
	url:'/token',
	verb:'GET',
	params: {
	  type: 'common',
	  keys: 
	    ['key','value'],
		data:[
			{
				key:'user_name',
				value:'aflred'
			},
			{
				key:'user_password',
				value:'000000'
			}
		]
	}
}

function keys(object) {
  var keys = [];
  for (var property in object)
    keys.push(property);
  return keys;
}

function values(object) {
  var values = [];
  for (var property in object)
    values.push(object[property]);
  return values;
}


function get_query_keys(token_request){
	var obj = keys();
	
	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
	}
	
	return obj.join('&');
}


function get_query_keyvalues(token_request){
	var obj = keys();
	
	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
		obj.push(token_request.params.data[i].value);
	}
	
	return obj.join('&');
}



function get_req_query_keys(req){		
	var obj = keys(req.query);
	return obj.join('&');
}

function parse_with(req,res){
	
	var _query_keys = get_query_keys(token_request);
	var req_query_keys = get_req_query_keys(req);
	
	var _request_url = ''
	if(token_request.verb  == 'GET'){
		_request_url = req.url.split('?')[0]
	}
	
	if(token_request.verb === req.method && (config.url_prefix + token_request.url) === _request_url){
		console.log('this is a token_request');
		
		if(_query_keys === req_query_keys){
			console.log('req.query完全一样');
			res.json({
				data:'token_request',
				status:{
					code:0,
					msg:'success'
				}
			});
		}
		 
	}
}

app.use(function(req, res, next){
  parse_with(req,res,next)
	console.log('dddd');
	next();
})



app.get('/',function(req,res){
    res.send('hello,world');
});


app.listen(config.server.port);

module.exports = app;
