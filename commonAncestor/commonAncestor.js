'use strict';

class BT {
  constructor( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.height = 0;
  }

  addNode( value ) {
    
    if ( this.left !== null && this.right !== null ) {
      throw 'Can\'t add node - already full';
    }
    
    let newNode = new BT( value );

    newNode.parent = this;
    newNode.height = this.height + 1; 
    
    if ( this.left === null ) {
      this.left = newNode;
      return this.left;
    }
    
    if ( this.right === null ) {
      this.right = newNode;
      return this.right;
    }
  }
}

const commonAnsRec = ( nodeOne, nodeTwo ) => {

  if ( nodeOne.parent === nodeTwo.parent ) {
    return nodeOne.parent;
  }

  if ( nodeTwo.parent === nodeOne ) {
    return nodeOne;
  }

  if ( nodeOne.parent === nodeTwo ) {
    return nodeTwo;
  }

  if ( nodeOne.height === nodeTwo.height ) {
    return commonAnsRec( nodeOne.parent, nodeTwo.parent );
  }

  if ( nodeOne.height > nodeTwo.height ) {
    return commonAnsRec( nodeOne.parent, nodeTwo );
  }

  if ( nodeOne.height < nodeTwo.height ) {
    return commonAnsRec( nodeOne, nodeTwo.parent );
  }

  if ( nodeOne.parent === null && nodeTwo.parent === null && nodeOne !== nodeTwo ) {
    return null;
  }

  return null;
};

const commonAnsIt = ( nodeOne, nodeTwo ) => {

  while ( nodeOne !== nodeTwo && nodeOne.parent !== null && nodeTwo.parent !== null && nodeOne.parent !== nodeTwo && nodeTwo.parent !== nodeOne ) {
    
    
    if ( nodeOne.height === nodeTwo.height && nodeOne.parent !== null && nodeTwo.parent !== null ) {
      nodeOne = nodeOne.parent;
      nodeTwo = nodeTwo.parent;
    } else if ( nodeOne.height > nodeTwo.height && nodeOne.parent !== null ) {
      nodeOne = nodeOne.parent;
    } else if ( nodeTwo.height > nodeOne.height && nodeTwo.parent !== null ) {
      nodeTwo = nodeTwo.parent;
    }
    
    if ( nodeOne.parent === null && nodeTwo.parent === null && nodeOne !== nodeTwo ) {
      return null;
    }

  }
  
  if ( nodeOne.parent === nodeTwo.parent ) {
    return nodeOne.parent;
  }

  if ( nodeOne.parent === nodeTwo ) {
    return nodeTwo;
  }

  if ( nodeTwo.parent === nodeOne ) {
    return nodeOne;
  }

  if ( nodeOne === nodeTwo ) {
    return nodeOne;
  }
};

module.exports.BT = BT;
module.exports.commonAnsRec = commonAnsRec;
module.exports.commonAnsIt = commonAnsIt;
