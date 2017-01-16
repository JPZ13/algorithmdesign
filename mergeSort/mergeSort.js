'use strict';

const merge = ( arrOne, arrTwo ) => {

  let resultArr = [];

  while ( arrOne.length !== 0 && arrTwo.length !== 0 ) {

    if ( arrOne[ 0 ] <= arrTwo[ 0 ] ) {
      resultArr.push( arrOne.shift() );
    }

    if ( arrOne[ 0 ] > arrTwo[ 0 ] ) {
      resultArr.push( arrTwo.shift() );
    }
  }

  if ( arrOne.length > 0 ) {
    resultArr = resultArr.concat( arrOne );
  }

  if ( arrTwo.length > 0 ) {
    resultArr = resultArr.concat( arrTwo );
  }

  return resultArr;
};

const mergeSort = ( arr ) => {
  
  if ( arr.length <= 1 ) {
    return arr;
  }

  let pivot = Math.round( ( 0 + arr.length - 1 ) / 2 );

  let left = arr.slice(0, pivot );
  
  let right = arr.slice( pivot );

  left = mergeSort( left );
  right = mergeSort( right );

  return merge( left, right );
};

module.exports.mergeSort = mergeSort;
