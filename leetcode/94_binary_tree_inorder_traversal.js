// Given the root of a binary tree, return the inorder traversal of its nodes' values.
//
//
//
// Example 1:
//
//
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:
//
// Input: root = []
// Output: []
// Example 3:
//
// Input: root = [1]
// Output: [1]
// Example 4:
//
//
// Input: root = [1,2]
// Output: [2,1]
// Example 5:
//
//
// Input: root = [1,null,2]
// Output: [1,2]
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//
//
// Follow up:
//
// Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

// recursively
var inorderTraversal = function (root) {
  let output = [];

  let traversal = (node, output) => {
    if (!node) return;
    if (node.left) traversal(node.left, output);
    output.push(node.val);
    if (node.right) traversal(node.right, output);
  };

  traversal(root, output);

  return output;
};

// iteratively with stack
var inorderTraversal = function (root) {
  let stack = [];
  let output = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }

  return output;
};
