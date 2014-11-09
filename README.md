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

### get类的为type1型

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

### post类的为type2型

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

### 表结构定义

	CREATE TABLE IF NOT EXISTS qbase_request (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		name string,
		url string,
		desc Text,
		host string,
		verb string,
		detail Text
	)


### 说明

| 可选项 | 参数用途    | 参数例子  | 说明                |  
|-------|------------|---------|------------------------|
| id    | 自增唯一    | 无需参数  | 无输出                  |
| name    | 请求名称 | token请求   | |
| url    | url | url   | http://127.0.0.1:5000/token |
| desc    | 描述 | 这个请求是干什么的，以及注意事项等   | |
| host    | 请求ip地址 | 127.0.0.1   | 可变 |
| verb    | 请求verb | 如get/post |非常多|
| detail    | 详情 | 比如请求参数，header等 |序列化成string存储|


### 例子
```
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
```

insert into qbase_request('label','host','verb','detail') values('get tokens list','127.0.0.1','GET','common');


## 层次

- nginx
- app.js
- middleware.js
- request cache for mockup
- request for impl

if api implement is marked, add it to nginx.conf,then reload nginx













