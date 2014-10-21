var request = require('supertest');
var app = require('../index');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();



describe('GET /tokens', function(){
  it('respond with json', function(done){
    request(app)
      .get('http://127.0.0.1:4100/tokens')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
				
				should.not.exist(err);
				
				should.exist(res.body.data)
				res.body.status.code.should.be.equal(0)
				
				res.status.should.be.equal(200);
				
        done()
      });
  })
})