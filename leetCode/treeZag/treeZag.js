'use strict';
const BinaryHeap = require( '../../heap/heap' );


class Tree {
  constructor( val ) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var zigzagLevelOrder = function( tree ) {

  let result = [];
  // Implement a priority queue structure somewhere
  let pQueue = new BinaryHeap( ( pairBig, pairSmall ) => {
    if ( pairBig[ 1 ] < pairSmall[ 1 ] ) {
      return true;
    }
    return false;
  });

  pQueue.push( [ tree, 0 ] );

  while( pQueue.size() > 0 ) {

    let current = pQueue.removeRoot();
    let node = current[ 0 ];
    let height = current[ 1 ];

    if ( result[ height ] === undefined ) {
      result.push( [] );
    }
    result[ height ].push( node.val );

    if ( height % 2 === 0 ) {
      if ( node.left !== null ) {
        pQueue.push( [ node.left, height + 1 ] );
      }

      if ( node.right !== null ) {
        pQueue.push( [ node.right, height + 1 ] );
      }
    } else {
      if ( node.right !== null ) {
        pQueue.push( [ node.right, height + 1 ] );
      }
      
      if ( node.left !== null ) {
        pQueue.push( [ node.left, height + 1 ] );
      }
    }
  }
  return result;
}

module.exports.Tree = Tree;
module.exports.treeZag = zigzagLevelOrder;
