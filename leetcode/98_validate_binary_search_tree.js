// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
//
// A valid BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
//
//
// Example 1:
//
//
// Input: root = [2,1,3]
// Output: true
// Example 2:
//
//
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // if there is no root that means we are at the end of our BST
  if (!root) return true;
  // call dfs with a min and max number
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// traverse the tree
var dfs = function (root, min, max) {
  if (!root) return true;

  // if the current root value is less than or equal to the minimum or greater than equal to the max then the tree is not a valid BST
  if (root.val <= min || root.val >= max) return false;

  // 1. dfs on the left subtree, our max should be the current root value (left subtree should be smaller than the root)
  // 2. dfs on the right subtree, our min should be the current root value (right subtree should be larger than the root)
  return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
};

// Time: O(N)
// Space: O(N)
