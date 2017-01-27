var expect = require('chai').expect;
var commonAnsRec = require('./commonAncestor').commonAnsRec;
var commonAnsIt = require('./commonAncestor').commonAnsIt;
var BT = require('./commonAncestor').BT;


var balanceTree = new BT( 'a' );
var leafB = balanceTree.addNode( 'b' );
var leafC = balanceTree.addNode( 'c' );
var leafD = leafB.addNode( 'd' );
var leafE = leafB.addNode( 'e' );
var leafF = leafC.addNode( 'f' );
var leafG = leafC.addNode( 'g' );

var ubTree = new BT( 'a' );
var nodeB = ubTree.addNode( 'b' );
var nodeC = ubTree.addNode( 'c' );
var nodeD = nodeB.addNode( 'd' );
var nodeE = nodeB.addNode( 'e' );

describe('Common Ancestor Recursive', function() {
  it('Should return the first common ancestor on a balanced tree', function() {
    expect( commonAnsRec( leafD, leafG ) ).to.eql( balanceTree );
    expect( commonAnsRec( leafE, leafC ) ).to.eql( balanceTree );
    expect( commonAnsRec( leafF, balanceTree ) ).to.eql( balanceTree );
    expect( commonAnsRec( leafD, leafE ) ).to.eql( leafB );
  });

  it('Should return the first common ancestor on an unbalanced tree', function() {
    expect( commonAnsRec( nodeD, nodeB ) ).to.eql( nodeB );
    expect( commonAnsRec( nodeD, ubTree ) ).to.eql( ubTree );
    expect( commonAnsRec( nodeE, ubTree ) ).to.eql( ubTree );
    expect( commonAnsRec( nodeD, nodeE ) ).to.eql( nodeB );
  });

  it('Should return null if there is no common ancestor', function() {
    expect( commonAnsRec( nodeE, leafG ) ).to.equal( null );
  });
});

describe('Common Ancestor Iterative', function() {
  // it('Should return the first common ancestor on a balanced tree', function() {
    // expect( commonAnsIt( leafD, leafG ) ).to.eql( balanceTree );
    // expect( commonAnsIt( leafE, leafC ) ).to.eql( balanceTree );
    // expect( commonAnsIt( leafF, balanceTree ) ).to.eql( balanceTree );
    // expect( commonAnsIt( leafD, leafE ) ).to.eql( leafB );
  // });

  it('Should return the first common ancestor on an unbalanced tree', function() {
    expect( commonAnsIt( nodeD, nodeB ) ).to.eql( nodeB );
    // expect( commonAnsIt( nodeD, ubTree ) ).to.eql( ubTree );
    // expect( commonAnsIt( nodeE, ubTree ) ).to.eql( ubTree );
    // expect( commonAnsIt( nodeD, nodeE ) ).to.eql( nodeB );
  });

  it('Should return null if there is no common ancestor', function() {
    expect( commonAnsIt( nodeE, leafG ) ).to.equal( null );
  });
});
