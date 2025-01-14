var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiJquery = require('chai-jquery');
var server = require('../../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Homepage', function() {

  var res;

  before(function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, response){
        res = response;
        done();
      });
  });

  it('should have status 200', function(done) {
      res.should.have.status(200);
      done();
  });

  it('should contain the word Sparta at / GET', function(done) {
      res.text.should.contain('Sparta');
      done();
  });
});

describe('API Posts', function() {

  var res;

  before(function(done) {
    chai.request(server)
      .get('/api/posts')
      .end(function(err, response){
        res = response;

        done();
      });
  });

  it('should have status 200', function(done) {
      res.should.have.status(200);
      done();
  });

  it('should have first entry that has a title of Post 1', function(done) {
      res.body[0].title.should.equal('Post 1');
      done();
  });
});

// describe('Blog', function() {
//   it('should display the list of posts at /posts GET', function(done) {
//     chai.request(server)
//       .get('/posts')
//       .end(function(err, res){
//         res.should.have.status(200);
//         done();
//       });
//   });
// });

// describe('Fibonacci', function() {
//   it('should display the correct fibonacci value at /fibonacci/10 GET', function(done) {
//     chai.request(server)
//       .get('/fibonacci/10')
//       .end(function(err, res){
//         res.should.have.status(200);
//         res.text.should.contain('55');
//         done();
//       });
//   });
// });
