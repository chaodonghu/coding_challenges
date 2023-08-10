var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  // while we're still in bounds
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // lower mid

    if (nums[mid] == target) {
      return true;
    }
    if (nums[low] === nums[mid]) {
      // handle duplicates, increment low
      low++;
      continue;
    }

    if (nums[low] <= nums[mid]) {
      // left part is sorted
      // check if the target lies within this left part -> if it does update high so our bounds is this left part
      // if the target does not lie within this left part -> update low so our bounds is outside this left part
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // nums[mid] < nums[high]
      // check if the target lies within this right part -> if it does update high so our bounds is this right part
      // if the target does not lie within this right part -> update low so our bounds is outside this right part
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};

// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3888242/100-binary-search-video-with-rotation-handling-optimal/
