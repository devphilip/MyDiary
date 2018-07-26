import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import data from '../models/entriesDB';

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

  it('it should test for POST request', (done) => {
    let entry = {
        id: 33,
        title: "the 33 title",
        content: "the content of the 33 entry"
    }
    chai.request(app)
      .post('/api/v1/entries')
      .send(entry)
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
        done();
      });
  });

  it('it should UPDATE an entry given the id', (done) => {
    let entry = {
      id: 23,
      title: "the 23 title",
      content: "the content of the 23 entry on the page"
    }
    
          // chai.request(app)
          // .put('/entries/' + data[2].id)
          // .send(entry)
          // .end((err, res) => {
          //     res.should.have.status(200);
          //     res.body.should.be.a('object');
          //     res.body.book.should.have.property('content').eql(entry.content);
          //   done();
          // });
    });
});