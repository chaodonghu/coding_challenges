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
var zigzagLevelOrder = function (root) {
  // instantiate our output stack
  let output = [];

  // do a dfs
  var dfs = function (node, level, output) {
    if (!node) return;

    // if the output level array doesn't exist yet create it
    if (!output[level]) {
      output.push([]);
    }

    // go to the left and the right of the root and increment the level
    dfs(node.left, level + 1, output);
    dfs(node.right, level + 1, output);

    // if the level is even
    if (level % 2 === 0) {
      output[level].push(node.val);
    } else {
      output[level].unshift(node.val);
    }
  };

  dfs(root, 0, output);

  return output;
};
