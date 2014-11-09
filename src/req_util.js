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

/**
 * if element in array
 *
 * @param {Array} arr
 * @param {string} str
 */
_is_contain_in_array= function (arr, str){
	return arr.indexOf(str) !== -1;
}


exports.get_query_keys= function (token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
	}

	return obj.join('&');
}

exports.get_query_keyvalues= function (token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
		obj.push(token_request.params.data[i].value);
	}

	return obj.join('&');
}

exports.get_req_query_keys= function (req){		
	var obj = keys(req.query);
	return obj.join('&');
}

exports.get_body_keys= function (token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
	}

	return obj.join('&');
}

exports.get_body_keyvalues= function (token_request){
	var obj = keys();

	for(var i in token_request.params.data){
		obj.push(token_request.params.data[i].key);
		obj.push(token_request.params.data[i].value);
	}

	return obj.join('&');
}

exports.get_req_body_keys= function (req){		
	var obj = keys(req.body);
	return obj.join('&');
}

exports.is_contain_in_array = _is_contain_in_array;