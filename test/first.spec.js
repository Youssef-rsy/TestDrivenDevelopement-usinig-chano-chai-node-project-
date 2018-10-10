var chai = require('chai');  
var should = chai.should(); 

function getTypeOfNumber(number){
    if(number % 2 != 0) return "impaire" ;
return "paire";
}
describe('#define if a number is paire or impaire ', function() {
    it('paire impaire number', function() {
        true.should.be.true;
    });
    it('#if 0 then its a paire number',()=>{
        getTypeOfNumber(0).should.equal("paire");
    });
    it('#if 1 then its a impaire number',()=>{
        getTypeOfNumber(1).should.equal("impaire");
    });
    it('#if 2 then its a paire number',()=>{
        getTypeOfNumber(2).should.equal("paire");
    });
    it('#if 3 then its a impaire number',()=>{
        getTypeOfNumber(3).should.equal("impaire");
    });

}); 
  