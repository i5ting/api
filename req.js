

function get_url_params_details( url_params_type ){
	var obj = {
		type		: url_params_type,
		detail	: {}
	}
	switch (url_params_type) {
	  case req.UPT_1:
			obj.detail = {
				key		: "",
				value	: ""
			}
			
	    break;
	  case req.UPT_2:
			obj.detail = {
				key		: "",
				value	: "",
				type  : ['text','file']
			}
			
	    break;
	  case req.UPT_3:
			obj.detail = {
				key		: "",
				value	: ""
			}
	    
	    break;
	  case req.UPT_4:
			obj.detail = {
				content		: "",
				type  : ['text','json','xml','html']
			}
			
	    break;
	  default:
			//UPT_1
			obj.detail = {
				key		: "",
				value	: ""
			}
			
	    break;
	}
	
	return obj;
}

function get_rtype(verb){
	if(req.r1.indexOf(verb) != -1){
		return 'r1'
	}else if(req.r2.indexOf(verb) != -1){
		return 'r2'
	}else{
		return 'undefined'
	}
}

function log(str){
	console.log(str)
}

function req(url,verb){
	
	var req_obj = {
		url	:url,
		verb:verb
	}
	
	var url_params_type = get_rtype(verb)

	
	req_obj.url_params_type = url_params_type;
	
	var url_params_details = get_url_params_details(url_params_type);
	
	req_obj.url_params_details = url_params_details;
	
	
	return req_obj;
}



req.r1 = [
	'GET',
	'COPY',
	'HEAD',
	'OPTIONS',
	'PURGE'
]

req.r2 = [
	'POST',
	'PUT',
	'PATCH',
	'DELETE',
	'UNLINK',
	'LINK'
]

req.rtypes = ['R1','R2']

req.UPT_1 = 'common'
req.UPT_2 = 'form-data'
req.UPT_3 = 'x-www-form-urlencoded'
req.UPT_4 = 'raw'

req.url_params_types = [req.UPT_1,req.UPT_2,req.UPT_3,req.UPT_4];



module.exports = req;
