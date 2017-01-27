'use strict';

const poolTerrain = ( matrix ) => {

  let sum = 0;

  for ( let y = 1; y < matrix.length - 1; y++ ) {

    for ( let x = 1; x < matrix[y].length - 1; x++ ) {

      if ( isBottom( matrix, x, y ) ) {
        sum = sum + dikjstra( matrix, x, y );
      }

    }

  }

  return sum;
};

const isBottom = ( matrix, x, y ) => {
  
  let cV = matrix[ y ][ x ];
  let up = matrix[ y - 1 ][ x ];
  let down = matrix[ y + 1 ][ x ];
  let left = matrix[ y ][ x - 1 ];
  let right = matrix[ y ][ x + 1 ];

  if ( cV <= up && cV <= down && cV <= left && cV <= right ) {
    return true;
  }

  return false;
};

const dikjstra = ( matrix, x, y ) => {

  let path = [];
  let queue = [];
  let visited = {};
  let minMax = null;

  let start = [ x, y ];

  queue.push( start );

  while ( queue.length > 0 ) {

    let currentNode = queue.shift();
    let cX = currentNode[ 0 ];
    let cY = currentNode[ 1 ];

    path.push( matrix[ currentNode[ 1 ] ][ currentNode[ 0 ] ] );

    visited[ JSON.stringify( currentNode ) ] = true;

    // loop neighbors and add lowest neighbors to queue
    let lowRoute = Math.min( matrix[ cY + 1 ][ cX ], matrix[ cY - 1 ][ cX ], matrix[ cY ][ cX + 1 ], matrix[ cY ][ cX - 1 ] );
    
    if ( matrix[ cY - 1 ][ cX ] === lowRoute && cY - 1 > 0 ) {
      let tuple = [ cX, cY - 1 ];
      if ( !( JSON.stringify( tuple ) in visited ) ) {
        visited[ JSON.stringify( tuple ) ] = true;
        queue.push( tuple );
      }
    }
    
    if ( matrix[ cY + 1 ][ cX ] === lowRoute && cY + 1 < matrix.length - 1 ) {
      let tuple = [ cX, cY + 1 ];
      if ( !( JSON.stringify( tuple ) in visited ) ) {
        visited[ JSON.stringify( tuple ) ] = true;
        queue.push( tuple );
      }
    }
    
    if ( matrix[ cY ][ cX + 1 ] === lowRoute && cX + 1 < matrix[ cY ].length - 1 ) {
      let tuple = [ cX + 1, cY ];
      if ( !( JSON.stringify( tuple ) in visited ) ) {
        visited[ JSON.stringify( tuple ) ] = true;
        queue.push( tuple );
      }
    }
    
    if ( matrix[ cY ][ cX - 1 ] === lowRoute && cX - 1 > 0 ) {
      let tuple = [ cX - 1, cY ];
      if ( !( JSON.stringify( tuple ) in visited ) ) {
        visited[ JSON.stringify( tuple ) ] = true;
        queue.push( tuple );
      }
    } 
    
    // if wall, set minMax 
    // TODO: add peak handling
    if ( cY - 1 === 0 ) {
      if ( minMax === null || matrix[ cY -1 ][ cX ] < minMax ) {
        minMax = matrix[ cY - 1 ][ cX ];
      }
    }
    
    if ( cY + 1 === matrix.length - 1 ) {
      if ( minMax === null || matrix[ cY + 1 ][ cX ] < minMax ) {
        minMax = matrix[ cY + 1 ][ cX ];
      }
    }
    
    if ( cX + 1 === matrix[ cY ].length - 1 ) {
      if ( minMax === null || matrix[ cY ][ cX + 1 ] < minMax ) {
        minMax = matrix[ cY ][ cX + 1 ];
      }
    }
    
    if ( cX - 1 === 0 ) {
      if ( minMax === null || matrix[ cY ][ cX - 1 ] < minMax ) {
        minMax = matrix[ cY ][ cX - 1 ];
      }
    }
  }

  if ( minMax <= start ) {
    return 0;
  }

  return path.reduce(( memo, item ) => {
    memo = memo + minMax - item;
    return memo;
  }, 0);
};

module.exports.dikjstra = dikjstra;
module.exports.poolTerrain = poolTerrain;
