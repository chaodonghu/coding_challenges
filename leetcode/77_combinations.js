/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];

  function dfs(current, start) {
    // if the current length is equal to the combination length then push into the result array
    if (current.length == k) {
      result.push(current);
      return;
    }
    // start at the index and go up to n
    for (let i = start; i <= n; i++) {
      // call dfs adding the current index/element and our current array, increase our starting index
      dfs([...current, i], i + 1);
    }
  }

  dfs([], 1);
  return result;
};
