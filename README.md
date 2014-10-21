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


