'use strict'

// Have to use a heap in several other things. Might as
// well implement it in one place and then use it over and
// over


class BinaryHeap {
  constructor( compareFn ) {
    this.heap = [];
    this.compare = compareFn;
  }

  push( item ) {
    this.heap.push( item )
    this.bubbleUp( this.heap.length - 1 );
  }

  pop() {
    return this.heap.pop()
  }

  size() {
    return this.heap.length;
  }

  bubbleUp( n ) {
    
    let item = this.heap[ n ];

    while( n > 0 ) {

      let parentN = Math.floor( ( n + 1 ) / 2 ) - 1;
      let parent = this.heap[ parentN ];

      if ( this.compare( parent, item ) ) {
        break;
      }

      this.heap[ parentN ] = item;
      this.heap[ n ] = parent;
      n = parentN;
    }

  }

  sinkDown( n ) {

    let length = this.heap.length;
    let item = this.heap[ n ];

    while( true ) {
      let child2N = ( n + 1 ) * 2;
      let child1N = child2N - 1;

      let swap = null;

      if ( child1N < length ) {
        let child1 = this.heap[ child1N ];
        if ( !this.compare( item, child1 ) ) {
          swap = child1N;
        }
      }

      if ( child2N < length ) {
        let child2 = this.heap[ child2N ];
        if ( !this.compare( item, child2 ) && this.compare( child2, this.heap[ child1N ] ) ) {
          swap = child2N;
        }
      }

      if ( swap === null ) {
        break;
      }

      this.heap[ n ] = this.heap[ swap ];
      this.heap[ swap ] = item;
      n = swap;
    }
  }

  removeRoot() {
    let result = this.heap[ 0 ];
    this.heap[ 0 ] = this.pop();
    this.bubbleUp( this.size() - 1 );
    this.sinkDown( 0 );
    return result;
  }
}

module.exports = BinaryHeap;
