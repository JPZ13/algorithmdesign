var expect = require('chai').expect;
var robotTour = require('./robotTour');

var threeBoard = [
  [ 0, 0, 0 ],
  [ 0, 1, 0 ],
  [ 0, 0, 0 ]
];

var fiveBoard = [
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 0 ],
  [ 0, 0, 0, 0, 0 ]
];

describe('RoboTour', function() {
  it('Should return the number of paths on a 3x3 matrix', function() {
    expect( robotTour(threeBoard) ).to.equal(2);
  });

  it('Should return the number of paths on a 5x5 matrix', function() {
    expect( robotTour(fiveBoard) ).to.equal(3);
  });
});
