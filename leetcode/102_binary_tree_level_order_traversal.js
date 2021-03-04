// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
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
var levelOrder = function (root) {
  let result = [];

  if (!root) return result;

  // create a queue
  let queue = [];
  queue.push(root);

  // while we have elements in our queue
  while (queue.length) {
    // instantiate a row array
    let row = [];
    // our row size will be the length of the queue
    let rowSize = queue.length;

    while (rowSize) {
      // get the first element in our queue
      let currentNode = queue.shift();

      // go from left ot right to see if the current node has a left
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      // then check out right node
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // push our current node into the row
      row.push(currentNode.val);
      // decrement the row size
      rowSize--;
    }

    // after we finish going through the row, push the row array into the result array
    result.push(row);
  }

  return result;
};
