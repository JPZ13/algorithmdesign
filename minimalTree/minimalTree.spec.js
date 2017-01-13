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
};

var threeBST = {
  value: 3,
  parent: twoBST,
  left: null,
  right: null,
  height: 0
};

var fourBST = {
  value: 4,
  parent: null,
  left: twoBST,
  right: null,
  height: 2
};

var fiveBST = {
  value: 5,
  parent: null,
  left: null,
  right: null,
  height: 0
};

var sixBST = {
  value: 6,
  parent: fourBST,
  left: fiveBST,
  right: null,
  height: 1
};

var sevenBST = {
  value: 7,
  parent: sixBST,
  left: null,
  right: null,
  height: 0
};

twoBST.left = oneBST;
twoBST.right = threeBST;

describe( 'Minimal Tree', function() {
  it( 'Should return a BST for an ordered array with a length of 3', function() {
    expect( minimalTree( [ 1, 2, 3 ] ) ).to.eql( twoBST );
  });

  it( 'Should return a BST for 7', function() {
    twoBST.parent = fourBST;
    fiveBST.parent = sixBST;
    fourBST.right = sixBST;
    sixBST.right = sevenBST;
    expect( minimalTree( [ 1, 2, 3, 4, 5, 6, 7 ] ) ).to.eql( fourBST );
  });
});
