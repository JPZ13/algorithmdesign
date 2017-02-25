'use strict';


// Why would you not just do this in linear time
// instead of finding an n log n solution with dynamic
// programming?


const longestSub = ( array ) => {

  let count = 1;

  let p = 0;
  for ( let i = 1; i < array.length; i++ ) {
    if ( array[ i ] > array[ p ] ) {
      count++
    }
    p = i;
  }

  return count;
};

module.exports.longestSub = longestSub;
