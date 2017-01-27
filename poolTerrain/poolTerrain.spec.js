var expect = require('chai').expect;
var poolTerrain = require('./poolTerrain').poolTerrain;
var dikjstra = require('./poolTerrain').dikjstra;

var poolOne = [
  [ 5, 5, 5, 5, 5 ],
  [ 3, 2, 1, 6, 7 ],
  [ 4, 1, 3, 2, 0 ],
  [ 6, 7, 8, 1, 5 ],
  [ 1, 4, 3, 5, 5 ]
];

var poolTwo = [
  [ 5, 5, 5, 5, 5 ],
  [ 5, 4, 4, 4, 5 ],
  [ 5, 4, 2, 4, 5 ],
  [ 5, 4, 4, 4, 5 ],
  [ 5, 5, 5, 5, 5 ]
];

var poolThree = [
  [ 5, 5, 5, 5, 5 ],
  [ 5, 4, 2, 1, 1 ],
  [ 5, 4, 2, 4, 5 ],
  [ 5, 4, 4, 4, 5 ],
  [ 5, 5, 5, 5, 5 ]
];

describe('Dikjstra Modified', function() {
  expect( dikjstra( poolOne, 2, 1 ) ).to.equal( 5 );
});

describe('Pool Terrain', function() {
  it('Should return the water that can form in pools on a terrain', function() {
    expect( poolTerrain( poolOne ) ).to.equal( 6 );
    expect( poolTerrain( poolTwo ) ).to.equal( 11 );
    expect( poolTerrain( poolThree ) ).to.equal( 0 );
  });
});
