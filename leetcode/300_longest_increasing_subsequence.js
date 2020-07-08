/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  var list = [];

  for (var i = 0; i < nums.length; i++) {
    // push 1 into the list as there must be atleast one subsequence
    list.push(1);
    // make another pointer and make it end at the length of the i
    for (var j = 0; j < i; j++) {
      // second pointer needs to be greater or equal to the first pointer
      // if the element is not greater then increase the pointer
      if (nums[j] < nums[i]) {
        // get the max of the subarrays (list[i] and list[j] + 1)
        list[i] = Math.max(list[i], list[j] + 1);
      }
    }
  }
  // return the maximum in the array
  return Math.max.apply(null, list)
}
