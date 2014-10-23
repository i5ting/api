
## middle


req('/token','GET',req.UPT_1);

req_obj

**
```
url:                /token
verb:               GET
url_params_details: 
  type:   'common'
  detail: 
    key:   
    value: 
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
url_params_details: 
  type:   'form-data'
  detail: 
    key:   
    value: 
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


	
### request
	
- id
- label
- desc
- url
- verb
- url_params_type

	CREATE TABLE IF NOT EXISTS qbase_request (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		label string,
		desc Text,
		url string,
		verb string,
		url_params_type string
	)


insert into qbase_request('label','url','verb','url_params_type') values('get tokens list','/tokens','GET','common');
### params

- id
- f1
- f2
- f3

	CREATE TABLE IF NOT EXISTS qbase_request_params(
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		key string,
		value Text,
		type string,
		request_id INTEGER
	)

name:'sang'
password:'000000'
f3:'text|file'

insert into qbase_request_params('f1','f2','type',request_id) values('name','sang','text',1);
insert into qbase_request_params('f1','f2','type',request_id) values('password','000000','text',1);

select * from qbase_request a left join qbase_request_params b where a.id = b.request_id

### headers

- id
- key
- value

	CREATE TABLE IF NOT EXISTS qbase_request_headers(
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		key string,
		value string,
		request_id INTEGER
	)




## sql


	//open database
	var db = openDatabase('qbase_api_db', '1.0', 'Test DB', 2 * 1024 * 1024); 

	db.transaction(function (tx) {            
		tx.executeSql(sql);
	});