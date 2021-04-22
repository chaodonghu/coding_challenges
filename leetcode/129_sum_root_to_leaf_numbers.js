// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
//
// An example is the root-to-leaf path 1->2->3 which represents the number 123.
//
// Find the total sum of all root-to-leaf numbers.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:
//
// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

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
var sumNumbers = function (root) {
  let sum = 0;
  const transverseTree = (node, current) => {
    if (!node) return;
    current = current + node.val.toString();
    if (!node.left && !node.right) {
      sum = sum + parseInt(current, 10);
      return;
    }

    if (node.left) transverseTree(node.left, current);
    if (node.right) transverseTree(node.right, current);
  };
  transverseTree(root, 0);

  return sum;
};

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
var sumNumbers = function (root) {
  let paths = [];

  var makePaths = (node, currentPath, output) => {
    if (!node) return output;

    currentPath.push(node.val);

    if (!node.right && !node.left) {
      output.push(currentPath.slice().join(""));
    }

    if (node.right) {
      makePaths(node.right, currentPath, output);
    }

    if (node.left) {
      makePaths(node.left, currentPath, output);
    }

    currentPath.pop();
  };

  makePaths(root, [], paths);

  return paths.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

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
var sumNumbers = function (root) {
  var traverseToLeaf = function (currentNode, pathSum) {
    if (currentNode === null) {
      return 0;
    }

    // calculate the path number of the current node
    pathSum = 10 * pathSum + currentNode.val;

    // if the current node is a leaf, return the current path sum
    if (currentNode.left === null && currentNode.right === null) {
      return pathSum;
    }

    // traverse the left and the right sub-tree
    return (
      traverseToLeaf(currentNode.left, pathSum) +
      traverseToLeaf(currentNode.right, pathSum)
    );
  };
  return traverseToLeaf(root, 0);
};
