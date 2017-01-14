'use strict';

// This is a garbage BST implementation written for testing,
// but I'm only interested in the balancing function
class BST {
  constructor( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode( value ) {

    let parent = this;

    let newNode = new BST( value );

    while( value < parent.value && parent.left !== null ) {
      parent = parent.left;
    }

    while( value >= parent.value && parent.right !== null ) {
      parent = parent.right;
    }

    if ( value < parent.value ) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

  }
}

const balanceTree = ( tree ) => {

  let lowerLimit = null;
  let upperLimit = null;

  const balanceHelp = ( node, height ) => {
    
    if ( node.left === null || node.right === null ) {
      if ( lowerLimit === null || height < lowerLimit ) {
        lowerLimit = height;
      }
    }

    if ( node.left === null && node.right === null ) {
      if ( upperLimit === null || height > upperLimit ) {
        upperLimit = height;
      }
    }

    if ( node.left !== null ) {
      balanceHelp( node.left, height + 1 );
    }

    if ( node.right !== null ) {
      balanceHelp( node.right, height + 1 );
    }
  };

  balanceHelp( tree, 0 );

  if ( upperLimit - lowerLimit > 1 ) {
    return false;
  }

  return true;
};

module.exports.BST = BST;
module.exports.balanceTree = balanceTree;
