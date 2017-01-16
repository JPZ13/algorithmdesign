var expect = require('chai').expect;
var rotatedArray = require('./rotatedArray').rotatedArray;

describe('Rotated Array', function() {

  it('Should return the index of an element in a rotated array', function() {
    expect( rotatedArray( [ 15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14 ], 5 ) ).to.equal( 8 );
    expect( rotatedArray( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 8 ) ).to.equal( 7 );
    expect( rotatedArray( [ 3, 4, 5, 6, 7, 8, 1 ], 3 ) ).to.equal( 0 );
    expect( rotatedArray( [ 3, 4, 5, 6, 7, 8, 1 ], 1 ) ).to.equal( 6 );
  });
});
