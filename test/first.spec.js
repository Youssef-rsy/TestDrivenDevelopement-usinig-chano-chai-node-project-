var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  

  describe('#define if a number is paire or impaire ', function() {
    it('paire impaire number', function() {
        true.should.be.true;
    });
    it('#if 0 then its a paire number');//  typeOf(0).should.equal(paire);
    it('#if 1 then its a impaire number');
    it('#if 2 then its a paire number');
    it('#if 3 then its a impaire number');

  }); 
  