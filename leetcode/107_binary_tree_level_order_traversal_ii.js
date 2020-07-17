//
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length) {
    let rowSize = queue.length;
    let row = [];
    while (rowSize) {
      // remove first element from queue
      let currentNode = queue.shift();
      // look at the left of the current currentNode
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      // look at the right of the current currentNode
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // push our current currentNode's value in stack
      row.push(currentNode.val);
      rowSize--;
    }
    result.unshift(row);
  }
  return result;
};
