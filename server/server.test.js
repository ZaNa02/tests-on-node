const request = require('supertest');

var app = require('./server').app;
//all of the below tests our server silly app...
it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect('Hello world!')
    .expect(200)
    .end(done);
});
