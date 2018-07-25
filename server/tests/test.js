import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp)

const expect = chai.expect;
const should = chai.should();

describe('App', () => {
  it('it should test for a get request', (done) => {
    chai.request(app)
      .get('/api/v1/entries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.not.be.eql(0);
        done();
      });
  });
  it('testing the request for getOneEntry', (done) => {
    chai.request(app)
      .get('/api/v1/entries/:id')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});