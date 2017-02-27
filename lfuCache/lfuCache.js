var LFUCache = function( capacity ) {
  this.cache = {};
  this.store = {};
  this.capacity = capacity;
  this.count = 0;
  this.size = 0;
};

LFUCache.prototype.getMin = function() {

  var resKey = null;

  for( var key in this.store ) {
    if ( resKey === null ) {
      resKey = key
    } else {
      if ( this.store[ key ].freq < this.store[ resKey ].freq ) {
        resKey = key;
      } else if ( this.store[ key ].freq === this.store[ resKey ].freq ) {
        if ( this.store[ key ].count < this.store[ resKey ].count ) {
          resKey = key;
        }
      }
    }
  }

  return resKey;

};

LFUCache.prototype.put = function( key, value ) {

  if ( !( key in this.cache ) ) {
    this.size++;
  }

  if ( this.capacity <= 0 ) {
    return;
  }

  if ( this.size > this.capacity ) {

    var min = this.getMin();

    if ( min === key ) {
      store[ min ].freq++
    } else {
      delete this.store[ min ];
      delete this.cache[ min ];
      this.size--;
      this.store[ key ] = { freq: 0, count: this.count };
    }

    
  }
  this.cache[ key ] = value;
  this.count++;
};

LFUCache.prototype.get = function( key ) {

  if ( !( key in this.cache ) ) {
    return -1;
  }

  this.store[ key ].freq++;
  this.store[ key ].count = this.count;

  this.count++

  return this.cache[ key ];
};
