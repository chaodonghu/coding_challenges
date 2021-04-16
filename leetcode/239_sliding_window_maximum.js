/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];

  if (!nums.length) {
    return result;
  }

  if (k > nums.length) {
    return result;
  }

  let window = [];
  // setup our first window
  for (let i = 0; i < k; i++) {
    // while we have a window and our current element is greater than the last element in our window, pop it off
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    // always push the current index into our window
    window.push(i);
  }

  // push the current max of our current window
  result.push(nums[window[0]]);

  // iterate through the rest of our nums starting at the end of the first window index
  for (let i = k; i < nums.length; i++) {
    // remove all elements in our window that are less than our current element
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }

    // check if our first element is out of range of the maximum size of the window
    if (window.length > 0 && window[0] <= i - k) {
      window.shift();
    }

    // do the same as above on how we constructed our first window, push the current index to the end of our deque
    window.push(i);
    // then push the maximum which is at the front of our deque into our result
    result.push(nums[window[0]]);
  }

  return result;
};


// Time: O(N) since each element is processed twice, it's index is added then removed from the deque
// Space: O(N)
