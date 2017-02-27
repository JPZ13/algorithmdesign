var deleteNode = function( root, key ) {

  for ( var i = 0; i < root.length; i++ ) {
    if ( root[i] === key ) {
      root = getItem( root, i );
      return root;
    }
  }

  return root;
}

var getItem = function( root, index ) {

  var rightChild = ( index + 1 ) * 2;
  var leftChild = rightChild - 1;

  if ( root[ rightChild ] === undefined || root[ rightChild ] === null ) {
    if ( root[ leftChild ] === undefined || root[ leftChild ] === null ) {
      root[ index ] = null;
      return root;
    }
  }

  var takeRight = false;

  if ( root[ rightChild ] !== undefined && root[ rightChild ] !== null ) {
    takeRight = true;
  }

  var child;
  if ( takeRight ) {
    child = rightChild

    while( root[ child ] !== null && root[ child ] !== undefined ) {
      child = ( child + 1 ) * 2 - 1;
    }

    child = Math.floor( ( child + 1 ) / 2 ) - 1;
  } else {
    child = leftChild

    while( root[ child ] !== null && root[ child ] !== undefined ) {
      child = ( child + 1 ) * 2;
    }

    child = Math.floor( ( child + 1 ) / 2 ) - 1;
  }

  root[ index ] = root[ child ];
  root[ child ] = null;
  return root;
};

module.exports = deleteNode;
