'use strict';

const bitInsert = ( bigInt, littleInt, start, end ) => {

  const allOnes = ~0;

  const left = allOnes << ( end  + 1 );
  const right = (( 1 << start ) - 1);

  const mask = left | right;

  const bigCleared = bigInt & mask;
  const littleShift = littleInt << start;

  return bigCleared | littleShift;

};

module.exports = bitInsert;
