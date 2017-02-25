var LRUCache = function(capacity) {
    this.cache = {};
    this.store = Array(capacity);
    this.count = 0;
    this.capacity = capacity;
    this.full = false;
};


LRUCache.prototype.get = function(key) {
    
    if ( !( key in this.cache ) ) {
        return -1;
    }
    
    // loop and find key in store and lowest index
        // if found, update count
    for ( var i = 0; i < this.store.length; i++ ) {
        if ( this.store[i] !== undefined && this.store[i].key === key ) {
            this.store[i].count = this.count;
            break;
        }
    }
    
    this.count++;
    
    return this.cache[key]
};


LRUCache.prototype.put = function(key, value) {
    
    if ( !(key in this.cache) && this.full ) {
        var lrIndex = this.store.reduce(function(memo, item) {
            if ( item.count < memo.count ) {
                memo = item;
            }
            return memo;
        }, this.store[0]).index;
        
        delete this.cache[ this.store[lrIndex].key ]
        this.store[lrIndex] = {key: key, count: this.count, index: lrIndex}
        
    } else if ( this.full ) {
        for ( var i = 0; i < this.store.length; i++ ) {
            if ( this.store[i] !== undefined && this.store[i].key === key ) {
                this.store[i].count = this.count;
                break;
            }
        }
    } else {
        this.store[this.count] = {key: key, count: this.count, index: this.count};
        if ( this.count >= this.capacity - 1 ) {
            this.full = true;
        }
    }
    this.cache[key] = value;
    this.count++; 
    
};

module.exports = LRUCache
