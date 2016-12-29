var expect = require('chai').expect;
var insertionSort = require('./insertionSort');

describe('Insertion sort', function() {
  it('Should sort an array of numbers', function() {
    expect(insertionSort([ 3, 4, 2, 1 ])).to.eql([ 1, 2, 3, 4 ])
  });

  it('Should sort an array of words', function() {
    expect(insertionSort([ 'cat', 'bat', 'hat' ])).to.eql([ 'bat', 'cat', 'hat' ]);
  });

  it('Should sort an array of characters', function() {
    expect(insertionSort([ 'c', 'x', 'f', 'd' ])).to.eql([ 'c', 'd', 'f', 'x' ]);
  });
});
