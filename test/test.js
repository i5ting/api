var request = require('supertest');
var app = require('../index');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();



describe('GET /tokens', function(){
  it('respond with json', function(done){
    request(app)
      .get('/')
      .set('Accept', 'application/text')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
				
				should.not.exist(err);
				
				// sh// ould.exist(res.body.data)
// 				res.body.status.code.should.be.equal(0)
//
// 				res.status.should.be.equal(200);
				
        done()
      });
  })
})