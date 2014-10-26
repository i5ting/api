var request = require('supertest');
var app = require('../app');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();


var req = require('../req');


var prettyjson = require('prettyjson');

var options = {
  noColor: true
};


describe('dump req obj', function(){
  it('get respond with json', function(done){
		
		request(app)
		  .get('/token?user_name=shilong&user_password=00000')
		  .expect('Content-Type', /json/)
		  .expect(200)
		  .end(function(err, res){
		    if (err) throw err;
		  });
		 
		 done();
  })
	
  it('post respond with json', function(done){
		request(app)
		  .post('/token')
			.send({ user_name: 'shilong', user_password: '00000' })
		  .expect(200)
			.expect('Content-Type', /json/)
		  .end(function(err, res){
		    if (err) throw err;
		  });
			
		 done();
  })
	
 
	//end
})