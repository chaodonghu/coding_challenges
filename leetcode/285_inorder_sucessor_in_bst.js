// Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null.
//
// The successor of a node p is the node with the smallest key greater than p.val.
//
//
//
// Example 1:
//
//
// Input: root = [2,1,3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
// Example 2:
//
//
// Input: root = [5,3,6,2,4,null,null,1], p = 6
// Output: null
// Explanation: There is no in-order successor of the current node, so the answer is null.
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105
// All Nodes will have unique values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let candidate = null;
  let cur = root;

  while (cur) {
    // current root is greater than p.val which means it is a candidate
    if (cur.val > p.val) {
      candidate = cur;
      // set the root now to the left of the curr
      cur = cur.left;
    } else {
      // the current val is less than the p val that means it is to the right of the root
      cur = cur.right;
    }
  }

  return candidate;
};

// Time: O(N) since in the worst case we go through all the nodes
// Space: O(1)
