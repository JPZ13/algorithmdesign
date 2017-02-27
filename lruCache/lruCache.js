var LRUCache = function(capacity) {
    this.cache = {};
    this.store = {};
    this.count = 0;
    this.capacity = capacity;
    this.size = 0;
};


LRUCache.prototype.getMin = function() {

  var resKey = null;

  for ( var key in this.store ) {
    if ( resKey === null ) {
      resKey = key;
    } else if ( this.store[key] < this.store[resKey] ) {
      resKey = key
    }
  }

  return resKey;
}

LRUCache.prototype.get = function(key) {
    
    if ( !( key in this.cache ) ) {
        return -1;
    }
    
    this.store[ key ] = this.count;
    this.count++;

    return this.cache[key]
};


LRUCache.prototype.put = function(key, value) {

    if ( !( key in this.store ) ) {
      this.size++
    }
  
    if ( this.size > this.capacity ) {
      var min = this.getMin();
      delete this.cache[ min ];
      delete this.store[ min ];
      this.size--;
    }   
    this.cache[ key ] = value;
    this.store[ key ] = this.count;

    this.count++;
};

module.exports = LRUCache
