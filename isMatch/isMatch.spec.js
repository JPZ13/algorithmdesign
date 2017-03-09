var expect = require( 'chai' ).expect;
var isMatch = require( './isMatch' );

describe( 'Regex match', function() {

  it( 'Should handle alphabetic characters', function() {
    expect( isMatch( 'aa', 'aa' ) ).to.be.true;
    expect( isMatch( 'a', 'aa' ) ).to.be.false;
  });

  it( 'Should handle . characters', function() {
    expect( isMatch( '.', 'a' ) ).to.be.true;
    expect( isMatch( '.a', 'za' ) ).to.be.true;
  });

  it( 'Should handle * characters', function() {
    expect( isMatch( 'a*a', 'aaaaaa' ) ).to.be.true;
    expect( isMatch( 'a*b', 'aaaab' ) ).to.be.true;
    expect( isMatch( 'a*c', 'aaaab' ) ).to.be.false;
  });
});
