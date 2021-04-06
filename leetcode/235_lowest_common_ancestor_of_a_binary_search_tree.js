//
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
//
//
//
// Example 1:
//
//
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
//
//
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:
//
// Input: root = [2,1], p = 2, q = 1
// Output: 2
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// Recursive
var lowestCommonAncestor = function (root, p, q) {
  let parentVal = root.val;
  let pVal = p.val;
  let qVal = q.val;

  // the lowest common ancestor could be one of 3 scenarios
  // 1. in the right of the subtree in that both p and q are greater then the current parent node
  // 2. in the left of the subtree in that both p and q are less than the current parent node
  // 3. The current node is neither greater then p and q or less than p and q together
  if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

// Time: O(N) in the worst case we visit all the nodes of the BST
// Space: O(N)

// Iterative
var lowestCommonAncestor = function (root, p, q) {
  let pVal = p.val;
  let qVal = q.val;
  let node = root;

  while (node) {
    let parentVal = node.val;
    if (pVal > parentVal && qVal > parentVal) {
      node = node.right;
    } else if (pVal < parentVal && qVal < parentVal) {
      node = node.left;
    } else {
      return node;
    }
  }
};

// Time: O(N)
// Space: O(1)
