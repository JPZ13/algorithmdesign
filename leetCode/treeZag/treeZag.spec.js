var expect = require( 'chai' ).expect;
var Tree = require( './treeZag' ).Tree;
var treeZag = require( './treeZag' ).treeZag;


describe( 'Tree Zag', function() {

  var testTree = new Tree( 3 );
  testTree.left = new Tree( 9 );
  testTree.right = new Tree( 20 );
  testTree.right.right = new Tree( 7 );
  testTree.right.left = new Tree( 15 );


  it( 'Should return the path for unbalanced trees', function() {
    expect( treeZag( testTree ) ).to.eql( [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ] );
  });
  
  it( 'Should return the path for balanced trees', function() {
    testTree.left.left = new Tree( 10 );
    testTree.left.right = new Tree( 12 );

    expect( treeZag( testTree ) ).to.eql( [ [ 3 ], [ 20, 9 ], [ 10, 12, 15, 7 ] ] );
  });
})
