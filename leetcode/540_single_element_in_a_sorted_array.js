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
