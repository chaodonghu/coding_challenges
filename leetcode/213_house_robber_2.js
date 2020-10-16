/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2 || nums.length === 3) {
    return Math.max(...nums);
  }
  var maxRob = (arr) => {
    var total = [arr[0], Math.max(arr[0], arr[1])];
    for (var i = 2; i < nums.length - 1; i++) {
      total[i] = Math.max(total[i - 1], total[i - 2] + arr[i]);
      console.log(total);
    }
    return total[total.length - 1];
  };
  var rob1 = maxRob(nums.slice(0, nums.length - 1));
  var rob2 = maxRob(nums.slice(1, nums.length));
  return Math.max(rob1, rob2);
};
