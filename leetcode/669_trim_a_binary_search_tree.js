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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;
  // when the current node's value is greater than the high then we know the trimmed bst must be on the left
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  // when the current root's value is less than the low, then we know the trimmed bst must be on the right
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  // otherwise we trim both sides of the tree
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};

// Time: O(N) we must visit every node in the tree
// Space: O(N) the call stack of our recursion could be as large as the number of nodes in the worst case
