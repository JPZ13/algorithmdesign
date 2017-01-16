'use strict';

const rotatedArray = ( rArr, target ) => {

  let pivot = Math.round( ( 0, rArr.length - 1 ) / 2 );
  let pivotRight = pivot;
  let pivotLeft = pivot;

  while ( rArr[ pivotLeft - 1 ] <= rArr[ pivotLeft ] && rArr[ pivotRight ] <= rArr[ pivotRight + 1 ] ) {

    pivotRight++;
    pivotLeft--;
  
  }

  if ( rArr[ pivotLeft - 1 ] > rArr[ pivotLeft ] ) {
    pivot = pivotLeft;
  }

  if ( rArr[ pivotRight ] > rArr[ pivotRight + 1 ] ) {
    pivot = pivotRight + 1;
  }

  if ( target === rArr[ pivot ] ) {
    return pivot;
  }

  if ( target > rArr[ pivot ] && target <=  rArr[ rArr.length - 1 ] ) {
    return binarySearch( rArr, pivot, rArr.length - 1, target  );
  }

  if ( target < rArr[ pivot - 1 ] && target <= rArr[ 0 ] ) {
    return binarySearch( rArr, 0, pivot - 1, target );
  }

  return null;

};

const binarySearch = ( binaryArr, start, end , target ) => {

  let mid = Math.round( ( start + end ) / 2 );

  while ( binaryArr[ mid ] !== target && end - start > 1 ) {

    if ( binaryArr[ mid ] > target ) {
      end = mid;
    } else {
      start = mid;
    }

    mid = Math.round( ( start + end ) / 2 );
  }

  if ( binaryArr[ start ] === target ) {
    return start;
  }

  if ( binaryArr[ mid ] === target ) {
    return mid;
  }

  if ( binaryArr[ end ] === target ) {
    return end;
  }
};


module.exports.rotatedArray = rotatedArray;
