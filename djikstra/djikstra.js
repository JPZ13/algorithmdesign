'use strict';

const dijkstra = ( matrix, source, target ) => {

  let queue = [];
  let directions = [ -1, 0, 1 ];

  // Add hash table for constant time lookup of 
  // verticies
  let vertexTable = {};

  // loop every node in the matrix
  for ( let y = 0; y < matrix.length; y++ ) {
    for ( let x = 0; x < matrix[ y ].length; x++ ) {
      let vertex = { position: [ x, y ], cost: Infinity, previous: undefined };
      
      vertexTable[ JSON.stringify( [ x, y ] ) ] = vertex;
      queue.push( vertex );
    }
  }

  vertexTable[ JSON.stringify( source ) ].cost = 0;


  // while the queue is not empty
  while( queue.length > 0 ) {
    // This nastiness would get eliminated with a good
    // priority queue implementation
    let node = queue.reduce(( memo, item ) => {
      if ( item.cost < memo.cost ) {
        memo = item;
      }
      return memo;
    }, queue[ 0 ]);
  
    if ( node.position[ 0 ] === target[ 0 ] && node.position[ 1 ] === target[ 1 ] ) {
      let path = [];
      while ( node.previous !== undefined ) {
        path.unshift( node.position )
        node = node.previous;
      }
      path.unshift( node.position );
      return path;
    }

    // gross vvv
    queue.splice( queue.indexOf( node ), 1);

    // loop each neighbor of node
    for ( let dY = 0; dY < directions.length; dY++ ) {
      for ( let dX = 0; dX < directions.length; dX++ ) {
        // if a valid address
        let modX = node.position[ 0 ] + directions[ dX ];
        let modY = node.position[ 1 ] + directions[ dY ];
        if ( modY >= 0 && modY < matrix.length && modX >= 0 && modX < matrix[ modY ].length ) {
          if ( typeof matrix[ modY ][ modX ] === 'number' ) {
            let neighbor = vertexTable[ JSON.stringify( [ modX, modY ] ) ];
            let alt = node.cost + matrix[ modY ][ modX ];
            if ( alt < neighbor.cost ) {
              neighbor.cost = alt;
              neighbor.previous = node;
            }
          }
          
        }
      }
    }

  }

  return null;
};

module.exports.dijkstra = dijkstra;
