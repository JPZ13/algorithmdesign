var expect = require('chai').expect;
var balanceTree = require('./balanceTree').balanceTree;
var BST = require('./balanceTree').BST;

var fourTree = new BST( 4 );
fourTree.addNode( 2 );
fourTree.addNode( 1 );
fourTree.addNode( 3 );

var fourTwo = new BST( 4 );
fourTwo.addNode( 2 );
fourTwo.addNode( 1 );
fourTwo.addNode( 3 );
fourTwo.addNode( 6 );


describe('Balance Tree', function() {
  it('Should return false for unbalanced trees', function() {
    expect( balanceTree( fourTree ) ).to.be.false;
  });

  it('Should return true for balanced trees', function() {
    expect( balanceTree( fourTwo ) ).to.be.true;
  });
});
