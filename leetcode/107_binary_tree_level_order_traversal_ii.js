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
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    let current = [];
    for (let i = 0; i < size; i++) {
      // remove first element from queue
      let head = queue.shift();
      // push our current head's value in stack
      current.push(head.val);
      // look at the left of the current head
      if (head.left !== null) {
        queue.push(head.left);
      }
      // look at the right of the current head
      if (head.right !== null) {
        queue.push(head.right);
      }
    }
    result.unshift(current);
  }
  return result;
};
