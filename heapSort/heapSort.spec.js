var expect = require('chai').expect;
var heapSort = require('./heapSort').heapSort;

describe('Heap Sort', function() {

  it('Should sort small arrays', function() {
    expect( heapSort( [ 4, 3, 1, 5 ] ) ).to.eql( [ 1, 3, 4, 5 ] );
  });

  it('Should sort backwards ordered arrays', function() {
    expect( heapSort( [ 5, 4, 3, 2, 1 ] ) ).to.eql( [ 1, 2, 3, 4, 5 ] );
  });

  it('Should sort large arrays', function() {
    expect( heapSort( [ 15, 14, 10, 9, 3, 4, 5, 2, 1, 13, 8, 7, 12, 11, 6, 0 ] ) ).to.eql( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] );
  });

});
