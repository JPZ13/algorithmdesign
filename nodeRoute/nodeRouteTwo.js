'use strict';

class Node {
  constructor( val ) {
    this.value = val;
    this.edges = [];
  }

  addNode( node ) {
    this.edges.push( node );
  }

}

const nodeRoute = ( graph, target ) => {

  let bfsQueue = [];

  const nodeHelper = ( node ) => {

    if ( node.value === target ) {
      return true;
    }
    
    if ( node.marked ) {
      return false;
    }

    node.marked = true;

    for ( let i = 0; i < node.edges.length; i++ ) {
      bfsQueue.push( node.edges[ i ] );
    }

    return false;

  };

  bfsQueue.push( graph );

  while ( bfsQueue.length > 0 ) {
    let result = nodeHelper( bfsQueue[ 0 ] );
    if ( result ) {
      return true;
    }
    bfsQueue.shift();
  }

  return false;

};

module.exports.Node = Node;
module.exports.nodeRoute = nodeRoute;
