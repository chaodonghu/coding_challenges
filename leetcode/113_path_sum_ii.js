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
 * @param {number} targetSum
 * @return {number[][]}
 */

const findPath = (node, targetSum, currentPath, output) => {
  // we have reached the leaf node thus return the output
  if (!node) return output;

  // push the current node into our path
  currentPath.push(node.val);

  // if the current node is a leaf and its value is equal to targetSum, save the current path
  if (node.val === targetSum && !node.left && !node.right) {
    // puish a copy of the current path
    output.push(currentPath.slice());
  } else {
    // traverse the left sub-tree
    findPath(node.left, targetSum - node.val, currentPath, output);
    // traverse the right sub-tree
    findPath(node.right, targetSum - node.val, currentPath, output);
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
};

var pathSum = function (root, targetSum) {
  let output = [];
  findPath(root, targetSum, [], output);
  return output;
};
