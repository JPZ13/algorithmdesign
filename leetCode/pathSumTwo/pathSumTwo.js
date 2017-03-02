'use strict';

const pathSum = ( tree, sum ) => {

  let result = [];

  const pathHelp = ( node, currSum, path ) => {

    currSum = currSum - node.val;
    path.push( node.val );

    if ( currSum === 0 && node.left === null && node.right === null ) {
      result.push( path );
      return;
    }

    if ( node.right !== null ) {
      pathHelp( node.right, currSum, JSON.parse( JSON.stringify( path ) ) );
    }

    if ( node.left !== null ) {
      pathHelp( node.left, currSum, JSON.parse( JSON.stringify( path ) ) );
    }

  };

  if ( tree !== null ) {
    pathHelp( tree, sum, [] );  
  }
  

  return result;
};
