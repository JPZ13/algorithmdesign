var expect = require('chai').expect;
var longestSub = require('./longestSub').longestSub;
var longestSubDp = require('./longestSubDp').longestSubDp;

describe('Longest Dynamic', function() {

  it('Should return the total of the longest subsequence', function() {
    expect( longestSubDp( [ 2, 4, 3, 5, 1, 7, 6, 9, 8 ] ) ).to.equal( 5 );
    expect( longestSubDp( [ 10, 22, 9, 33, 21, 50, 41, 60, 80 ] ) ).to.equal( 6 );
    expect( longestSubDp( [ 3, 10, 2, 1, 20 ] ) ).to.equal( 3 );
    expect( longestSubDp( [ 3, 2 ] ) ).to.equal( 1 );
    expect( longestSubDp( [ 50, 3, 10, 7, 40, 80 ] ) ).to.equal( 4 );
  });
});

describe('Longest Subsequence', function() {

  it('Should return the total of the longest subsequence', function() {
    expect( longestSub( [ 2, 4, 3, 5, 1, 7, 6, 9, 8 ] ) ).to.equal( 5 );
    expect( longestSub( [ 10, 22, 9, 33, 21, 50, 41, 60, 80 ] ) ).to.equal( 6 );
    expect( longestSub( [ 3, 10, 2, 1, 20 ] ) ).to.equal( 3 );
    expect( longestSub( [ 3, 2 ] ) ).to.equal( 1 );
    expect( longestSub( [ 50, 3, 10, 7, 40, 80 ] ) ).to.equal( 4 );
  });
});
