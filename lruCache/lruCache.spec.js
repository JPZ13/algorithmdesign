var expect = require( 'chai' ).expect;
var LruCache = require( './lruCache' );

describe('LRU Cache', function() {
  it('Should return reliably for large capacities', function() {
    var lru = new LruCache(10);

    lru.put(10, 13);
    lru.put(3, 17);
    lru.put(6, 11);
    lru.put(10, 15);
    lru.put(9, 10);
    expect( lru.get(13) ).to.equal( -1 );
    lru.put( 2, 19 );
    expect( lru.get(2) ).to.equal( 19 );
    expect( lru.get(3) ).to.equal( 17 );
    lru.put( 5, 25 );
    expect( lru.get(8) ).to.equal( -1 );
    lru.put( 9, 22 );
    lru.put( 5, 5 );
    lru.put( 1, 30 );
    expect( lru.get(11) ).to.equal( -1 );
    lru.put( 9, 12 );
    expect( lru.get(7) ).to.equal( -1 );
    expect( lru.get(5) ).to.equal( 5 );
    expect( lru.get(8) ).to.equal( -1 );
    expect( lru.get(9) ).to.equal( 12 );
    lru.put( 4, 30 );
    lru.put( 9, 3 );
    expect( lru.get(9) ).to.equal( 3 );
    expect( lru.get(10) ).to.equal( 5 );
    expect( lru.get(10) ).to.equal( 5 );

  })
})
