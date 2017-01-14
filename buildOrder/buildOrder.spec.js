var expect = require('chai').expect;
var Project = require('./buildOrder').Project;
var buildOrder = require('./buildOrder').buildOrder;

var projA = new Project( 'a' );
var projB = new Project( 'b' );
var projC = new Project( 'c' );
var projD = new Project( 'd' );
var projE = new Project( 'e' );
var projF = new Project( 'f' );

describe('Build Order', function() {
  var projList = [ projA, projB, projC, projD, projE, projF ];
  var depList = [ [ projA, projD ], [ projF, projB ], [ projB, projD ], [ projF, projA ], [ projD, projC ] ];
  var resultList = [ projF, projB, projA, projD, projC, projE ];
  it('Should return the projects in build order', function() {
    expect( buildOrder( projList, depList ) ).to.eql( resultList );
  });
});
