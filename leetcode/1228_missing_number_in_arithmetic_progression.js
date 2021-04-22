// In some array arr, the values were in arithmetic progression: the values arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.
//
// Then, a value from arr was removed that was not the first or last value in the array.
//
// Return the removed value.
//
//
//
// Example 1:
//
// Input: arr = [5,7,11,13]
// Output: 9
// Explanation: The previous array was [5,7,9,11,13].
// Example 2:
//
// Input: arr = [15,13,12]
// Output: 14
// Explanation: The previous array was [15,14,13,12].
//
//
// Constraints:
//
// 3 <= arr.length <= 1000
// 0 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function (arr) {
  // since the first and last elements are not removed this means that the difference is the difference between
  // last and the first element divided by the number of elements in the array
  let difference = (arr[arr.length - 1] - arr[0]) / arr.length;

  let expected = arr[0];

  // loop through our array
  for (let i = 0; i < arr.length; i++) {
    // if the expected value is equal to the current element in our array, increase our expected value by the global difference
    if (expected === arr[i]) {
      expected += difference;
    } else {
      return expected;
    }
  }
  return expected;
};

// Time: O(N)
// Space; O(1)
