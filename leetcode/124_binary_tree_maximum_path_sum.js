// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// Example 1:
//
// Input: [1,2,3]
//
//        1
//       / \
//      2   3
//
// Output: 6
// Example 2:
//
// Input: [-10,9,20,null,null,15,7]
//
//    -10
//    / \
//   9  20
//     /  \
//    15   7
//
// Output: 42

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  // instantite max as the lowest number possible
  var max = -Number.MAX_VALUE;
  // call recursive function on root
  getMaxSum(root);
  // return updated max
  return max;

  function getMaxSum(node) {
    // if node is null return 0
    if (!node) return 0;

    // find max sum on left tree
    var leftSum = getMaxSum(node.left);
    // find max sum on right tree
    var rightSum = getMaxSum(node.right);
    // max is the maximum of current max or current node plus left and right
    max = Math.max(max, node.val + leftSum + rightSum);
    // return the maximum of either 0, the left tree or the right tree
    return Math.max(0, node.val + leftSum, node.val + rightSum);
  }
};

// Time: O(N), we traverse each node no more then twice
// Space: O(H), where H is the height of the tree due to the recursion stack
