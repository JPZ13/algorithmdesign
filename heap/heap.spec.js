var expect = require('chai').expect;
var BinaryHeap = require('./heap.js');

var minHeap = new BinaryHeap(function( smaller, larger ) {
  if ( smaller < larger ) {
    return true;
  }
  return false;
});

var minTwo = new BinaryHeap(function( smaller, larger ) {
  if ( smaller < larger ) {
    return true;
  }
  return false;
});

minHeap.push(7);
minHeap.push(2);
minHeap.push(9);
minHeap.push(3);
minHeap.push(4);
minHeap.push(6);
minHeap.push(4);

minTwo.push(4);
minTwo.push(2);
minTwo.push(7);
minTwo.push(1);
minTwo.push(9);
minTwo.push(8);
minTwo.push(3);

var maxHeap = new BinaryHeap(function( larger, smaller ) {
  if ( larger > smaller ) {
    return true;
  }
  return false;
});

maxHeap.push(7);
maxHeap.push(2);
maxHeap.push(9);
maxHeap.push(3);
maxHeap.push(4);
maxHeap.push(6);
maxHeap.push(4);

describe('Min Heap', function() {

  it('Should keep a sorted min heap', function() {
    expect( minHeap.heap ).to.eql([ 2, 3, 4, 7, 4, 9, 6 ]);
    expect( minTwo.heap ).to.eql([ 1, 2, 3, 4, 9, 8, 7 ]);
  });

  it('Should return the minimum value', function() {
    expect( minHeap.removeRoot() ).to.equal( 2 );
    expect( minHeap.removeRoot() ).to.equal( 3 );
    expect( minHeap.heap ).to.eql([ 4, 6, 4, 7, 9 ]);
    expect( minTwo.removeRoot() ).to.equal( 1 );
    expect( minTwo.removeRoot() ).to.equal( 2 );
    expect( minTwo.heap ).to.eql([ 3, 4, 8, 7, 9 ]);
  });
});

describe('Max Heap', function() {
  
  it('Should keep a sorted max heap', function() {
    expect( maxHeap.heap ).to.eql([ 9, 4, 7, 2, 3, 6, 4 ]);
  });

  it('Should return the maximum value', function() {
    expect( maxHeap.removeRoot() ).to.equal( 9 );
    expect( maxHeap.removeRoot() ).to.equal( 7 );
    expect( maxHeap.heap ).to.eql([ 6, 4, 4, 2, 3 ]);
  });
})
