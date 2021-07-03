// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
//
// An integer a is closer to x than an integer b if:
//
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
//
//
// Example 1:
//
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:
//
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
//
//
// Constraints:
//
// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // first sort the array by their smallest distance to x,
  // if the comparators have the same distance, take the lesser value
  arr.sort((a, b) => {
    let diffA = Math.abs(x - a);
    let diffB = Math.abs(x - b);

    if (diffA !== diffB) {
      return diffA - diffB;
    }
    return a - b;
  });

  // take the first k elements of the array, sorted
  return arr.slice(0, k).sort((a, b) => a - b);
};

// Time: O(N log N)
// Space: O(1)
