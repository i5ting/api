var config = require('./config');
var data = require('./data');

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

function get_body_keys(token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
	}

	return obj.join('&');
}

function get_body_keyvalues(token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
		obj.push(token_request.params.data[i].value);
	}

	return obj.join('&');
}

function get_req_body_keys(req){		
	var obj = keys(req.body);
	return obj.join('&');
}

/**
 * Initialize a new `TestAgent`.
 *
 * @param {Array} arr
 * @param {string} str
 */
function _is_contain_in_array(arr, str){
	return arr.indexOf(str) !== -1;
}
 
/**
 * 处理http verb为type1的请求
 *
 * var r1 = ['GET','COPY','HEAD','OPTIONS','PURGE']
 */ 
function mount_a_req_with_type1(obj, req, res, next){
	var token_request = obj;

	function parse_with(req,res,next){
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
		
		next();
	} 
	
	return parse_with(req,res,next);
}

/**
 * 处理http verb为type2的请求
 *
 * var r2 = ['POST','PUT','PATCH','DELETE','UNLINK','LINK']
 */ 
function mount_a_req_with_type2(obj, req, res, next){
	console.log('a post request');
	var token_request = obj;

	function parse_with(req,res,next){
		var _query_keys = get_body_keys(token_request);//user_name&user_password
		var req_query_keys = get_req_body_keys(req);
		var _request_url = ''
		
		if(token_request.verb  == 'POST'){
			_request_url = req.url.split('?')[0]
		}
	
		if(token_request.verb === req.method && (config.url_prefix + token_request.url) === _request_url){
			console.log('this is a post token_request\n' + req_query_keys);

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
		
		next();
	} 
	
	return parse_with(req,res,next);
}

/**
 * 处理请求入口函数
 */ 
function mount_a_req(obj, req, res, next){
	var r1 = ['GET','COPY','HEAD','OPTIONS','PURGE']
	var r2 = ['POST','PUT','PATCH','DELETE','UNLINK','LINK']
	var verb = obj.verb.toUpperCase();
 
	if(_is_contain_in_array(r1, verb) == true){
		return  mount_a_req_with_type1(obj, req, res, next);
	}else if(_is_contain_in_array(r2, verb) == true){
		return  mount_a_req_with_type2(obj, req, res, next);
	}else{
		console.log('in middleware.js,the http verb is not correct'+ verb);
	}
}

module.exports = function(obj) {
	return function(req, res, next) {
		mount_a_req(obj, req, res, next);
		// call the next middleware
	  next(); 
	} 
};
