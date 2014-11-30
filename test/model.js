var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

// mongoose config
var mongoose = require('mongoose')  
  , connectionString = 'mongodb://localhost:27017/db_api'
  , options = {};

options = {  
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, function(err, res) {  
  if(err) {
    console.log('[mongoose log] Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('[mongoose log] Successfully connected to: ' + connectionString);
  }
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback () {
  // yay!
	console.log('mongoose open success');
});

var RequestModel = require('../src/request_model');
var Request = require('../src/request');

var param = {
  rname: 'tokenrequest',
	verb: 'get',
	url: '/token',
	host: '127.0.0.1',
	detail: 'a long long data',
	desc: '这是一个测试用的校验token的接口'
}

describe('RequestModel', function(){
	before(function() {
    // runs before all tests in this block

		
  })
  after(function(){
    // runs after all tests in this block
		
		// RequestModel.remove({}, function (err) {
// 		  if (err) return handleError(err);
// 		  // removed!
// 			console.log('remove all data');
// 		});
		
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })
	
  describe('#save()', function(){
    it('should return sang_test2 when user save', function(done){		
			// create a user a new user
			var testRequest = new RequestModel(param);
		
			testRequest.save(function(err,user) {
			    if (err) throw err;
					console.log('add mock data ok');
					
					assert.equal(user.rname,'tokenrequest');
					done();
			});
			
			
    })
  })

  describe('#create()', function(){
    it('should return 60 when auto save Password123 encrypted string length', function(done){
			done();

 
    })
  })
	
  describe('#read()', function(){
    it('should return 60 when auto save Password123 encrypted string length', function(done){
			done();

 
    })
  })
})