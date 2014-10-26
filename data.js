var token_get_request = {
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

var token_post_request = {
	url:'/token',
	verb:'POST',
	params: {
	  type: 'x-www-form-urlencoded',
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


module.exports = {
	token_get_request: token_get_request,
	token_post_request: token_post_request
};
