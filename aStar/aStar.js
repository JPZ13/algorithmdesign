'use strict';

const BinaryHeap = require('../heap/heap');

const aStar = ( matrix, start, target ) => {
  
  let priorityQueue = new BinaryHeap(( lesser, greater ) => {
    if ( lesser[ 1 ] < greater[ 1 ] ) {
      return true;
    }
    return false;
  });

  let cameFrom = {};
  let costSoFar = {};
  let directions = [ -1, 0, 1 ];

  cameFrom[ JSON.stringify( start ) ] = 'None';
  costSoFar[ JSON.stringify( start ) ] = 0;

  priorityQueue.push( [ start , 0 ] );

  while( priorityQueue.size() > 0 ) {

    let node = priorityQueue.removeRoot();

    if ( node[ 0 ][ 0 ] === target[ 0 ] && node[ 0 ][ 1 ] === target[ 1 ] ) {
      // do the tracing
      let path = [];
      node = node.shift();
      while( cameFrom[ JSON.stringify( node ) ] !== 'None' ) {
        path.unshift( node );
        node = cameFrom[ JSON.stringify( node ) ]; 
      }
      path.unshift( node );
      return path;
    }

    for ( let y = 0; y < directions.length; y++ ) {
      for ( let x = 0; x < directions.length; x++ ) {
        let modY = directions[ y ] + node[ 0 ][ 1 ];
        let modX = directions[ x ] + node[ 0 ][ 0 ];
        if ( modY >= 0 && modY < matrix.length && modX >= 0 && modX < matrix[ modY ].length ) {
          if ( modX !== node[ 0 ][ 0 ] || modY !== node[ 0 ][ 1 ] ) {
            if ( typeof matrix[ modY ][ modX ] === 'number' ) {
              let newCost = matrix[ modY ][ modX ] + costSoFar[ JSON.stringify( [ node[ 0 ][ 0 ], node[ 0 ][ 1 ] ] ) ];
              if ( costSoFar[ JSON.stringify( [ modX, modY ] ) ] === undefined || newCost < costSoFar[ JSON.stringify( [ modX, modY ] ) ] ) {
                let priority = costSoFar[ JSON.stringify( [ modX, modY ] ) ] = newCost + heuristic( [ modX, modY ], target );
                priorityQueue.push( [[ modX, modY ], priority] );
                cameFrom[JSON.stringify( [ modX, modY ] )] = [ node[ 0 ][ 0 ], node[ 0 ][ 1 ] ];
              }
            }
          }
        }
      }
    }
  }

  return null;

};

const heuristic = ( node, goal ) => {
  let dX = Math.abs( node[ 0 ] - goal[ 0 ] );
  let dY = Math.abs( node[ 1 ] - goal[ 1 ] );
  const D = 1;
  const D2 = 1;
  return D * ( dX + dY ) + ( D2 - 2 * D ) * Math.min( dX, dY );
};

module.exports.aStar = aStar;
