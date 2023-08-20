var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // if we already have that value in our cache, clear the timeout for that value and proceed to set a new timeout value
  const valueInCache = this.cache.get(key);
  if (valueInCache) {
    clearTimeout(valueInCache.timeout);
  }

  // this will automatically delete the key value pair in the map after a certain duration
  const timeout = setTimeout(() => this.cache.delete(key), duration);

  // set that key in our map
  this.cache.set(key, {
    value,
    timeout,
  });

  return !!valueInCache;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  // if the cache has the key, return the value else return -1
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  // our cache will always have non-expired keys since they self delete
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

// Time: O(1) since insertion, deletion and retrieving key value pairs in a map is O(1) time
// Space: O(N) where N is the # of key-value pairs in the cache
