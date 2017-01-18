var expect = require('chai').expect;
var fibDynamic = require('./fibDynamic');

describe('Dynamic Programming with nth Fibonacci', function() {
  it('Should return the nth Fibonacci number', function() {
    expect( fibDynamic( 0 ) ).to.equal( 0 );
    expect( fibDynamic( 4 ) ).to.equal( 3 );
    expect( fibDynamic( 5 ) ).to.equal( 5 );
    expect( fibDynamic( 9 ) ).to.equal( 34 );
    expect( fibDynamic( 11 ) ).to.equal( 89 );
  });
});
