'use strict';

const longestSubDp = ( array ) => {

  if ( array.length === 0 ) {
    return 0;
  }
  
  let memo = {};
  let largest = 1;

  memo[ array[ 0 ] ] = { 'previous': 'None', 'count': 1 };
  let p = 0;


  for ( let i = 1; i < array.length; i++ ) {
    let max = null
    for ( let j = i - 1; j >= 0; j-- ) {
      // get biggest previous value smaller than current
      if ( array[ i ] >= array[ j ] ) {
        if ( max === null || memo[ array[ j ] ].count > memo[ max ].count ) {
          max = array[ j ];
          memo[ array[ i ] ] = { 'previous': max, 'count': memo[ max ].count + 1 };
        }
      } else if ( max === null && j === 0) {
        memo[ array[ i ] ] = { 'previous': 'None', 'count': 1 };
      } else if ( j === 0 ) {
        memo[ array[ i ] ] = { 'previous': max, 'count': memo[ max ].count + 1 };
      }

    }
    if ( memo[ array[ i ] ].count > largest ) {
      largest = memo[ array[ i ] ].count;
    }
  }

  return largest;

};

const longestTwo = ( array ) => {

  let container = [];

  for ( let i = 0; i < array.length; i++ ) {
    container[ i ] = 1;
    if ( i > 0 ) {
      for ( let j = 0; j < i; j++ ) {
        if ( array[ i ] >= array[ j ] && container[ j ] >= container[ i ] ) {
          container[ i ] = container[ j ] + 1
        }
      }
    }
  }
  return container[ container.length - 1 ];
};

module.exports.longestSubDp = longestTwo;
