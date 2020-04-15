var eight = require('../');
var assert = require("assert");

describe('The is-eight package', function() {
   it('should return true for 8', function() {
      assert.equal(true, eight(8));
   }),
   it('should return true for "8"', function() {
      assert.equal(true, eight("8"));
   }),
   it('should return true for 2+6', function() {
      assert.equal(true, eight(2+6));
   }),
   it('should return true for 8.0', function() {
      assert.equal(true, eight(8.0));
   }),
   it('should return true for "VIII"', function() {
      assert.equal(true, eight("VIII"));
   }),
   it('should return true for "eight"', function() {
      assert.equal(true, eight("eight"));
   }),
   it('should return true for "вісім"', function() {
      assert.equal(true, eight("вісім"));
   }),
   it('should return true for "ocho"', function() {
      assert.equal(true, eight("ocho"));
   }),

   it('should return false for 7', function() {
      assert.notEqual(true, eight(7));
   }),
   it('should return false for 80', function() {
      assert.notEqual(true, eight(80));
   }),
   it('should return false for -8', function() {
      assert.notEqual(true, eight(-8));
   })
});
