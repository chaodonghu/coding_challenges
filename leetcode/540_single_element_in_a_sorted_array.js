// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.
//
// Follow up: Your solution should run in O(log n) time and O(1) space.
//
//
//
// Example 1:
//
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
//
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
//
//
// Constraints:
//
// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^5
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + (right - left) / 2;
    let checkHalvesEven = (right - mid) % 2 == 0;
    // pair is on the right side
    if (nums[mid + 1] == nums[mid]) {
      // case 1: if halves are even then move left pointer past found pair of mid
      if (checkHalvesEven) {
        left = mid + 2;
      } else {
        // case 2: halves are odd then move the right pointer to left of mid pair
        right = mid - 1
      }
      // pair is on the left side
    } else if (nums[mid - 1] == nums[mid]) {
      // case 3: if halves are even then more the right pointer past found pair of mid
      if (checkHalvesEven) {
        right = mid - 2
      } else {
        // case 4: if havles are odd then move the left pointer to the right of the mid pair
        left = mid + 1
      }
    } else {
      return nums[mid]
    }
  }

  return nums[left]
};
