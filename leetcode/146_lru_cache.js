/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // if the map doesn't not have the key then return -1
  if (!this.cache.has(key)) return -1;
  let v = this.cache.get(key);
  // delete whereever the key is
  this.cache.delete(key);
  // place it at the front of the cache (which is the last element in the map)
  this.cache.set(key, v);
  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // delete whereever the key is
  this.cache.delete(key);
  // place it at the front of the cache (which is the last element in the map)
  this.cache.set(key, value);
  // if the size of the cache is greater then the capacity
  if (this.cache.size > this.capacity) {
    // delete the first element in the cache
    this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// For reference: https://www.interviewcake.com/concept/java/lru-cache#:~:text=A%20Least%20Recently%20Used%20(LRU,other%20end%20of%20the%20rack.
