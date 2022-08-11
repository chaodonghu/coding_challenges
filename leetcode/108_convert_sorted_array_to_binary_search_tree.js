// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
//
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
//
//
//
// Example 1:
//
//
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
//
// Example 2:
//
//
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  // find the middle of the sorted array which will be the root
  let mid = Math.floor(nums.length / 2);

  let root = new TreeNode(nums[mid]);

  // the left of the root will be all the nums up until the mid
  root.left = sortedArrayToBST(nums.slice(0, mid));
  // the right of the root will be all the nums from the mid
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

// Time: O(N)
// Space: O(N) for recursion stack

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  var helper = function(left, right) {
    // once our right pointer goes to the left of the left pointer then we are out of bounds
    if (left > right) return null;

    // get the mid in the array, this will be the root
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(nums[mid]);
    // all the elements to the left of the root will fixate the left pointer and move the right pointer to the mid - 1
    root.left = helper(left, mid - 1);
    // all the elements to the right of the root will fixate the right pointer and move the left pointer to the mid + 1
    root.right = helper(mid + 1, right);

    return root;
  }

  // call our recursive function starting the left and right pointers at the bounds of the nums array
  return helper(0, nums.length - 1);
};

// Time: O(N)
// Space: O(log N) since the tree is height balanced
