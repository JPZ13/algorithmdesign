'use strict';
const BinaryHeap = require('../heap/heap.js');

const heapSort = ( array ) => {
  let result = [];
  let bHeap = new BinaryHeap( ( greater, smaller ) => {
    if ( greater > smaller ) {
      return true;
    }
    return false;
  });

  while( array.length > 0 ) {
    let toAdd = array.pop();

    bHeap.push( toAdd );
  }
  
  while ( bHeap.heap.length > 0 ) {
    let next = bHeap.removeRoot();
    result.unshift( next );
  }

  return result;
};

module.exports.heapSort = heapSort;
