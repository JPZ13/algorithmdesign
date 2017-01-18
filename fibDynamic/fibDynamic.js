'use strict';

const fibDynamic = ( n, memo ) => {

  memo = memo || {};
  
  if ( n === 0 || n === 1 ) {
    return n;
  }

  if ( !memo[ n ] ) {
    memo[ n ] = fibDynamic( n - 1, memo ) + fibDynamic( n - 2, memo );
  }

  return memo[ n ];
};

module.exports = fibDynamic;
