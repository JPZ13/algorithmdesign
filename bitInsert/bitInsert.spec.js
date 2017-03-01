var expect = require( 'chai' ).expect;
var bitInsert = require( './bitInsert' );

describe( 'Bit Insert', function() {

  it( 'Should insert one binary into another', function() {
    expect( bitInsert( 1024, 19, 2, 6 ) ).to.equal( 1100 );
    expect( bitInsert( 1100, 19, 1, 5 ) ).to.equal( 1126 );
    expect( bitInsert( 1126, 19, 0, 4 ) ).to.equal( 1139 );
  })
});
