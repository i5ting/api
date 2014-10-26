var config = require('./config');
var data = require('./data');

module.exports = function() {

	var token_request = data.token_get_request
	var token_post_request = data.token_post_request
	
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
	 
	return function(req, res, next) {
		parse_with(req,res)
		// call the next middleware
	  next(); 
	} 
};
