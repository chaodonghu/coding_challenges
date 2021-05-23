const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    // once we reached the capacity of our window
    if (windowEnd >= k - 1) {
      // the max sum is maximum of the max sum or the current window sum
      maxSum = Math.max(maxSum, windowSum);
      // subtract the first element from our window sum
      windowSum -= arr[windowStart];
      // increase the window start
      windowStart += 1;
    }
  }
  return maxSum;
};

// Time: O(N)
// Space: O(1)
