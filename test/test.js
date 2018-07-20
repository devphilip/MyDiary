const assert = require("chai").assert;
const app = require("../controllers/diary.controller");
const data = require("../model/diary.data");
// const chaiHttp = require('chai-http');
const should = assert.should;

describe("diary.controller", () =>{
  describe("readAll", () =>{
    it("should read all data from the data store", (done) => {
      assert.request
      .get("/api/v1/diary")
      .end(function(err,res){
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
    });
  });
});