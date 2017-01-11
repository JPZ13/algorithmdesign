'use strict';

const robotTour = ( board ) => {
  let count = 0;

  const tourIt = ( matrix, x, y ) => {
    if ( x === matrix[ 0 ].length - 1 && y === matrix.length - 1 ) {
      count++;
    }

    matrix[ y ][ x ] = 1;

    if ( x < matrix[ y ].length - 1 && matrix[ y ][ x + 1 ] === 0 ) {
      tourIt( JSON.parse(JSON.stringify( matrix )), x + 1, y );
    }

    if ( y < matrix.length - 1 && matrix[ y + 1 ][ x ] === 0 ) {
      tourIt( JSON.parse(JSON.stringify( matrix )), x, y + 1 );
    }
  };

  tourIt( board, 0, 0 );
  return count;
};

module.exports = robotTour;
