var expect = require( 'chai' ).expect;
var deleteNode = require( './deleteNode' );

describe( 'Delete Node', function() {

  it( 'Should delete the proper node in the tree', function() {
    expect( deleteNode([ 5, 3, 6, 2, 4, null, 7 ], 3) ).to.eql( [ 5, 4, 6, 2, null, null, 7 ] );
  })
})
