/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  let res = [];

  // recursive function
  const flatten = (elements, l) => {
    for (const el of elements) {
      // check if element is an array and we still have levels to go deeper
      if (Array.isArray(el) && l > 0) {
        // recursively call flatten, decrease our levels
        flatten(el, l - 1);
      } else {
        // push the element into our result, this may be a array or a single num/el
        res.push(el);
      }
    }
  };

  // call flatten on our array and pass in the desired depth
  flatten(arr, n);
  return res;
};