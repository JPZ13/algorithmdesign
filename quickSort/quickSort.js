'use strict';

const partition = ( arr, left, right ) => {
  
  let pivot = arr[ Math.floor( (left + right ) /2 ) ];

  while ( left <= right ) {
    
    while ( arr[ left ] < pivot ) {
      left++;
    }
    
    while ( arr[ right ] > pivot ) {
      right--;
    }

    if ( left <= right ) {
      let swap = arr[ left ];
      arr[ left ] = arr[ right ];
      arr[ right ] = swap;
      left++;
      right--;
    }

  }
  return left;
};


const quickSort = ( arr, left, right ) => {

  left = left || 0;
  right = right || arr.length - 1;
  let index = partition( arr, left, right );

  if ( left < index - 1 ) {
    quickSort( arr, left, index - 1 );
  }

  if ( index < right ) {
    quickSort( arr, index, right );
  }
  return arr;
};

module.exports.quickSort = quickSort;
