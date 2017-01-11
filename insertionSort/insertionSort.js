'use strict';

const insertionSort = ( arr ) => {
  for ( let i = 0; i < arr.length; i++ ) {
    let j = i;
    while ( j > 0 && arr[ j ] < arr[ j - 1 ] ) {
      let swap = arr[ j - 1 ];
      arr[ j - 1 ] = arr[ j ];
      arr[ j ] = swap;
      j = j - 1;
    }
  }
  return arr;
};

module.exports = insertionSort;
