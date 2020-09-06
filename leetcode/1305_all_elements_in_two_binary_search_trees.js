/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let output = [];
  var inOrder = function (root, output) {
    if (!root) return;

    inOrder(root.left, output);
    output.push(root.val);
    inOrder(root.right, output);
  };

  inOrder(root1, output);
  inOrder(root2, output);

  return output.sort((a, b) => a - b);
};
