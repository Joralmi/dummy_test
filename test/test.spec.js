const server = require("../app.js");
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Must get your dummy app welcome message', function(){
  it('Get message', getMsg);
});

function getMsg(done){
  chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property("message");
      res.body.message.should.be.a("string");
      res.body.message.should.equal('Your dummy test works!');
      done();
    });
}
