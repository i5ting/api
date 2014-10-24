# api mocker



## DEBUG

    "start": "DEBUG=* ./node_modules/.bin/supervisor ./index.js",





## Request

### common

- url
- http verb
- url params
- headers

### Type 1

- GET
- COPY
- HEAD
- OPTIONS
- PURGE

url params details

- key
- value

### Type 2

- POST
- PUT
- PATCH
- DELETE
- LINK
- UNLINK


url params details

- form-data
	- key
	- value
	- type
- x-www-form-urlencoded
	- key
	- value
- raw
	- type {text|json|xml|html}
	- content
	
	
## Response

- status
- time
- headers
- cookies
- body(view moded : {pretty | raw | preview})
	- text
	- json
	- xml
	- html


## req_obj

一个请求一个对象，存

**
```
url:                /token
verb:               GET
params: 
  type:   'common'
  keys: 
    ['key','value'],
	data:[
		{
				key:user_name,
				value:'aflred'
		},
		{
			key:user_password,
			value:'000000'
		}
	]
```


```
url:                /token
verb:               POST
params: 
  type:   'form-data'
  keys: 
    ['key','value','type'], 
	data:[
		{
				key:user_name,
				value:'aflred',
				type:'text'
		},
		{
			key:user_password,
			value:'000000',
			type:'text'
		}
	]

```


## table

	CREATE TABLE IF NOT EXISTS qbase_request (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		label string,
		desc Text,
		host string,
		verb string,
		detail Text
	)

var o = {
	url:'/token',
	verb:'GET'
	params: {
	  type: 'common'
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

insert into qbase_request('label','host','verb','detail') values('get tokens list','127.0.0.1','GET','common');


## 层次

- nginx
- app.js
- middleware.js
- request cache for mockup
- request for impl

if api implement is marked, add it to nginx.conf,then reload nginx













