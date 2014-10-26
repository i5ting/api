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
  it('respond with json', function(done){
		
		request(app)
		  .get('/token')
		  .expect('Content-Type', /json/)
		  .expect('Content-Length', '20')
		  .expect(200)
		  .end(function(err, res){
		    if (err) throw err;
		  });
			
		 
		 done();
  })
})