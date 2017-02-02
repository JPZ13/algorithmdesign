var expect = require('chai').expect;
var aStar = require('./aStar').aStar;

var planeA = [
  [ 4, 5, 6, 5, 7, 9 ],
  [ 5, 7, 6, 5, 2, 9 ],
  [ 4, 9, 'X', 'X', 2, 9 ],
  [ 3, 2, 1, 3, 4, 9 ],
  [ 3, 0, 2, 4, 5, 9 ],
  [ 4, 5, 6, 7, 8, 9 ]
];

describe('A*', function() {

  it('Should return the shortest and most cost-effective path on a graph traversal', function() {
    expect( aStar( planeA, [ 1, 4 ], [ 4, 1 ] ) ).to.eql( [ [ 1, 4 ], [ 2, 3 ], [ 3, 3 ], [ 4, 2 ], [ 4, 1 ] ] );
  });
});
