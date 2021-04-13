/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const array = [];

  let left = 1;
  let right = n;

  // loop through until we hit k
  for (let i = 0; i < k; i++) {
    if (i % 2 === 0) {
      array.push(left);
      left++;
    } else {
      array.push(right);
      right--;
    }
  }

  let remain = n - k;

  // while we have a remainder after we go up to k
  while (remain) {
    // go through our remainder and either go decreasing order if our k is even or increasing if our k is odd
    if (k % 2 === 0) {
      array.push(right);
      right--;
    } else {
      array.push(left);
      left++;
    }
    remain--;
  }

  return array;
};


// Time: O(N) since we loop through all the numbers of N
// Space: O(1)
