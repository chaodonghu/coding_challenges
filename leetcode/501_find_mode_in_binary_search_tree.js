// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
//
//
// For example:
// Given BST [1,null,2,2],
//
//    1
//     \
//      2
//     /
//    2
//
//
// return [2].
//
// Note: If a tree has more than one mode, you can return them in any order.
//
// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count)

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
var findMode = function (root) {
  // instantiate a dictionary of modes
  const modes = {};

  // dfs go through the bst and store all the values into the map
  var dfs = function (node) {
    if (!node) return null;

    let key = node.val.toString();
    modes[key] = (modes[key] || 0) + 1;
    dfs(node.right);
    dfs(node.left);
  };

  dfs(root);

  let res = [];
  let maxCount = null;

  // go through all the keys in the mode dictionary
  for (key in modes) {
    // instantiate our max count and result array on first iteration of our keys
    if (!maxCount) {
      maxCount = modes[key];
      res = [key];
    } else {
      // if the current mode is greater then the max count
      if (modes[key] > maxCount) {
        // update the max count
        maxCount = modes[key];
        // replace the result array with an array with just the new mode
        res = [key];
      } else if (modes[key] === maxCount) {
        // if there are multiple modes then update our result array
        res = [...res, key];
      }
    }
  }

  return res;
};

// Time Complexity: O(N) go through entire BST and then our mode object
// Space Complexity: O(N)
