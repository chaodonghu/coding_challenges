// Given two positive integers n and k.
//
// A factor of an integer n is defined as an integer i where n % i == 0.
//
// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.
//
//
//
// Example 1:
//
// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
// Example 2:
//
// Input: n = 7, k = 2
// Output: 7
// Explanation: Factors list is [1, 7], the 2nd factor is 7.
// Example 3:
//
// Input: n = 4, k = 4
// Output: -1
// Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.
// Example 4:
//
// Input: n = 1, k = 1
// Output: 1
// Explanation: Factors list is [1], the 1st factor is 1.
// Example 5:
//
// Input: n = 1000, k = 3
// Output: 4
// Explanation: Factors list is [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500, 1000].
//
//
// Constraints:
//
// 1 <= k <= n <= 1000

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const factors = (number) => {
  Array.from(
    // creates an empty array then populates it with the index of the array
    Array(number + 1),
    (_, i) => i
  )
    // filters the array if it is a factor of the index
    .filter((i) => number % i === 0);
};

const factors2 = (number) => {
  [...Array(number + 1).keys()].filter((i) => number % i === 0);
};

var kthFactor = function (n, k) {
  const generatedFactors = factors(n);

  return k > generatedFactors.length ? -1 : generatedFactors[k - 1];
};

var kthFactor = function (n, k) {
  let counter = 0;

  // loop through numbers up until n
  for (let i = 1; i <= n; i++) {
    // if the index is a factor of n then increment counter
    if (n % i === 0) {
      counter += 1;

      // once the counter equals to the desired k index, return the current index
      if (counter === k) {
        return i;
      }
    }
  }

  return -1;
};
