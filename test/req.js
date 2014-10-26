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
		
  	 var data = req('/token','GET',req.UPT_1);
		 
		 should.exist(data);
		 console.log(prettyjson.render(data, options));
		 
		 done();
  })
})