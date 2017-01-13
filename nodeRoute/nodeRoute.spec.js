var expect = require('chai').expect;
var Node = require('./nodeRoute').Node;
var nodeRoute = require('./nodeRoute').nodeRoute; 
var routeTwo = require('./nodeRouteTwo').nodeRoute;

var sixGraph = new Node( 1 );
var nodeTwo = new Node( 2 );
var nodeThree = new Node( 3 );
var nodeFour = new Node( 4 );
var nodeFive = new Node( 5 );
var nodeSix = new Node( 6 );

nodeFour.addNode( nodeFive );
sixGraph.addNode( nodeTwo );
sixGraph.addNode( nodeThree );
sixGraph.addNode( nodeFour );

describe('DFS Directed Graph Route', function() {
  it('Should find present nodes in graph', function() {
    expect( nodeRoute( sixGraph, 5 ) ).to.equal( true );
  });

  it('Should return false if node not present', function() {
    expect( nodeRoute( sixGraph, 6 ) ).to.equal( false );
  });
});

describe('BFS Directed Graph Route', function() {
  it('Should find present nodes in graph', function() {
    expect( routeTwo( sixGraph, 5 ) ).to.equal( true );
  });

  it('Should return false if node not present', function() {
    expect( routeTwo( sixGraph, 6 ) ).to.equal( false );
  });
});
