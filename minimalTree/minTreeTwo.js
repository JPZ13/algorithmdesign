'use strict';

class minBST {
  constructor( arr ) {
    if ( arr.length === 1 ) {
      this.value = arr[0];
      this.left = null;
      this.right = null;
      return this;
    }
    let mid = Math.round( ( 0 + arr.length - 1 ) / 2 );
    this.value = arr[ mid ];
    let leftArr = arr.slice( 0, mid );
    let rightArr = arr.slice( mid + 1 );
    this.left = new minBST( leftArr );
    if ( rightArr.length !== 0 ) {
      this.right = new minBST( rightArr );
    } else {
      this.right = null;
    }
  }
}
