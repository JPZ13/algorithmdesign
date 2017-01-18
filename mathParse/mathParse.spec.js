var expect = require('chai').expect;
var mathParse = require('./mathParse').mathParse;

describe('Math Parse', function() {

  it('Should evaluate basic tuple operations', function() {
    expect( mathParse( '1+1' ) ).to.equal( 2 );
    expect( mathParse( '2*2' ) ).to.equal( 4 );
    expect( mathParse( '4/2' ) ).to.equal( 2 );
    expect( mathParse( '2^3' ) ).to.equal( 8 );
  });

  it('Should evaluate according to PEMDAS', function() {
    expect( mathParse( '2+3*2/4+5' ) ).to.equal( 8.5 );
    // expect( mathParse( '(4*3)/(2*3)' ) ).to.equal( 2 );
    // expect( mathParse( '4*(3/2)*3' ) ).to.equal( 18 );
  });
});
