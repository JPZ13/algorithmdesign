'use strict';

class BST {
  constructor( val ) {
    this.value = val;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.height = 0;
  }

  addNode( val ) {
    let newNode = new BST( val );

    // Solves starting node
    if ( this.parent === null && this.left === null ) {
      this.parent = newNode;
      this.parent.height = this.height + 1;
      this.parent.left = this;
      return this.parent;
    }

    // Solves adding new level - on bottom level
    if ( this.height === 0 && this.parent.right && this.parent.right === this ) {
      let root = this.parent;
      while ( root.parent !== null ) {
        root = root.parent;
      }
      root.parent = newNode;
      root.parent.left = root;
      root.parent.height = root.height + 1;
      return root.parent;
    }
    
    // Solves adding new level - above bottom level
    if ( this.parent !== null && this.parent.parent !== null && this.parent.left !== null ) {
      let grandpa = this.parent.parent;
      this.parent.parent = newNode;
      newNode.parent = grandpa;
      newNode.right = this.parent;
      newNode.height = this.parent.height;
      // Optional - fix heights of children
      
      return this.parent.parent;
    }

    // solves adding new left child
    if ( this.height > 0 && this.left === null ) {
      let grandpa = this.parent;
      this.parent = newNode;
      this.parent.parent = grandpa;
      this.parent.left = this;
      this.parent.height = this.height;
      this.height = this.height - 1;
      grandpa.right = this.parent;
      return this.parent;
    }
    
    // Solves adding right child
    if ( this.right === null && this.height > 0 ) {
      this.right = newNode;
      this.right.height = this.height - 1;
      this.right.parent = this;
      return this.right;
    }

  }

}

const minimalTree = ( sortedArr ) => {

  let currentNode = new BST( sortedArr[ 0 ] );

  for ( let i = 1; i < sortedArr.length; i++ ) {
    currentNode = currentNode.addNode( sortedArr[ i ] );
  }

  while ( currentNode.parent !== null ) {
    currentNode = currentNode.parent;
  }

  return currentNode;
};

module.exports.BST = BST;
module.exports.minimalTree = minimalTree;
