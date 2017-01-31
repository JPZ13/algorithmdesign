'use strict';

const dynoKnap = ( knapSack, limit ) => {

  let matrix = [];
  let resultSack = [];

  knapSack.sort(( a, b ) => {
    return a.weight - b.weight;
  });
  
  for ( let y = 0; y < knapSack.length; y++ ) {
    matrix.push( [] );

    for ( let x = 0; x <= limit; x++ ) {
      // return the max value for a single object under the current x limit
      let rowTotalA = knapSack[ y ].weight <= x ? knapSack[y].value : 0;
      // go up a row if that row exists and back whatever weight was subtracted
      
      let rowTotalB = 0;
      let diff = x - knapSack[ y ].weight
      
      if ( rowTotalA > 0 && diff > 0 && y > 0 ) {
        rowTotalB = matrix[ y - 1 ][ diff ];
      } else if ( rowTotalA === 0 && y > 0 ) {
        rowTotalB = matrix[ y - 1 ][ x ];
      }
      
      let rowTotalC = 0;
      
      if ( y > 0 ) {
        rowTotalC = matrix[ y - 1 ][ x ];
      }
      
      let rowTotal = Math.max( rowTotalA + rowTotalB, rowTotalC );
      matrix[ y ][ x ] = rowTotal;
    }

  }
  
  let mY = matrix.length - 1;
  let mX = matrix[ mY ].length - 1;

  while ( mX > 0 || mY > 0 ) {
    if ( matrix[ mY - 1 ][ mX ] !== undefined && matrix[ mY - 1 ][ mX ] >= matrix[ mY ][ mX ] ) {
      mY = mY - 1;
    } else {
      resultSack.push( knapSack[ mY ] );
      mX = mX - knapSack[ mY ].weight;
    }
  }

  return resultSack;
};


module.exports.dynoKnap = dynoKnap;
