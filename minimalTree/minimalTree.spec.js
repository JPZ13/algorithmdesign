var expect = require('chai').expect;
var BST = require('./minimalTree').BST;
var minimalTree = require('./minimalTree').minimalTree;

var twoBST = {
  value: 2,
  parent: null,
  left: null,
  right: null,
  height: 1
};

var oneBST = {
  value: 1,
  parent: twoBST,
  left: null,
  right: null,
  height: 0
}

var threeBST = {
  value: 3,
  parent: twoBST,
  left: null,
  right: null,
  height: 0
}

twoBST.left = oneBST;
twoBST.right = threeBST;

describe( 'Minimal Tree', function() {
  it( 'Should reuturn a BST for an ordered array with a length of 3', function() {
    expect( minimalTree( [ 1, 2, 3 ] ) ).to.eql( twoBST );
  });
});
