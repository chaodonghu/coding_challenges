/**
 * @param {Function} fn
 */
function memoize(fn) {
  this.cache = new Map();

  return function (...args) {
    // JSON stringify the args
    let key = JSON.stringify(args);

    // if our cache has the args already then retrieve the value from our map
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    // if we haven't seen these args yet, set the key value pair in our map
    let value = fn(...args);
    this.cache.set(key, value);

    // return the value
    return value;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
