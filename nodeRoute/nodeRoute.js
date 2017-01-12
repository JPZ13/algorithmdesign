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
  
  if ( graph.value === target ) {
    return true;
  }

  for ( let i = 0; i < graph.edges.length; i++ ) {
    if ( graph.edges[ i ].value === target ) {
      return true;
    }
  }

  for ( let i = 0; i < graph.edges.length; i++ ) {
    if ( nodeRoute( graph.edges[i], target ) ) {
      return true;
    }
  }

  return false;
};

module.exports.Node = Node;
module.exports.nodeRoute = nodeRoute;
