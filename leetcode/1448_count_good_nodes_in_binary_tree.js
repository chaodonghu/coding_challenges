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
var goodNodes = function (root) {
  // keep track of the good nodes
  let good = 0;

  // do a dfs on the tree
  function traverse(node, max) {
    // once we reached a null node, return
    if (!node) return;
    // if the current node's value is greater or equal then the max, then increment the # of good nodes
    if (node.val >= max) ++good;
    // update our max
    max = Math.max(max, node.val);

    // traverse the node's left and the node's right
    traverse(node.left, max);
    traverse(node.right, max);
  }

  // traverse with the root as the node, and the root's value as the node initially
  traverse(root, root.val);
  return good;
};

// Time: O(N)
// Space: O(N) due to the recursive callstack
