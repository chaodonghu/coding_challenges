/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */

// The array is 'this'
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const results = [];

  // loop through each element in the array
  this.forEach((value, index) => {
    // if the callback function returns back true, add the el to our results
    if (callbackFn.call(thisArg, value, index, this)) {
      results.push(value);
    }
  });

  // return the results
  return results;
};
