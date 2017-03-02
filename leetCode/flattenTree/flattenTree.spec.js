var expect = require( 'chai' ).expect;
var flatten = require( './flattenTree' ).flatten;
var Tree = require( './flattenTree' ).Tree;

describe( 'Flatten Tree', function() {

  var testTree = new Tree( 1 );
  testTree.left = new Tree( 2 );
  testTree.left.left = new Tree( 3 );
  testTree.left.right = new Tree( 4 );
  testTree.right = new Tree( 5 );
  testTree.right.right = new Tree( 6 );
  flatten( testTree );

  var testTwo = new Tree( 1 );
  testTwo.right = new Tree( 2 );
  testTwo.right.left = new Tree( 3 );
  flatten( testTwo );
  
  it( 'Should flatten a tree', function() {
    expect( testTree.val ).to.equal( 1 );
    expect( testTree.left ).to.equal( null );
    expect( testTree.right.val ).to.equal( 2 );
    expect( testTree.right.right.val ).to.equal( 3 );
    expect( testTree.right.right.right.val ).to.equal( 4 );

    expect( testTwo.val ).to.equal( 1 );
    expect( testTwo.right.val ).to.equal( 2 );
    expect( testTwo.right.left ).to.equal( null );
    expect( testTwo.right.right.val ).to.equal( 3 );
  });

  it( 'Should do it in place', function() {
    expect( flatten( testTree ) ).to.be.undefined;
  })
})
