const expect = require("chai").expect;
const Compare = require('../src/compare.js');

describe("A series of test for finding the similarity", function(err) {
    it("should return count for the matching words", function(done) {
        var result = Compare('how to create array of objects in javascript','how to create an object array in Javascript');
        expect(result).to.be.equal(6);
        done();
    });

    it("should not return count if one of the sentence is missing", function(done) {
        var result = Compare('how to create array of objects in javascript','');
        expect(result).to.be.equal(-1);
        done();
    });

    it("should not return count if empty sentence is passed", function(done) {
        var result = Compare('','');
        expect(result).to.be.equal(-1);
        done();
    });
});
