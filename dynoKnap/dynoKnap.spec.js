var expect = require('chai').expect;
var dynoKnap = require('./dynoKnap').dynoKnap;

var knapSackA = [];
var itemA = { value: 7, weight: 5 };
knapSackA.push( itemA );
var itemB = { value: 5, weight: 4 };
knapSackA.push( itemB );
var itemC = { value: 4, weight: 3 };
knapSackA.push( itemC );
var itemD = { value: 1, weight: 1 };
knapSackA.push( itemD );


var knapSackB = [];
var itemF = { value: 10, weight: 2 };


describe('Dynamic Programming Knapsack', function() {

  it('Should return the optimal knapsack combo', function() {
    expect( dynoKnap( knapSackA, 7 ) ).to.eql( [ itemB, itemC ] );
  });
});
