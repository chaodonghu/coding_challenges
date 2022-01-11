// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
//
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
//
// Return the sum of these numbers.
//
//
//
// Example 1:
//
//
//
// Input: [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
//
//
// Note:
//
// The number of nodes in the tree is between 1 and 1000.
// node.val is 0 or 1.
// The answer will not exceed 2^31 - 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  const binaries = [];
  // do a preorder traversal (root -> left -> right)
  const traverse = (node, str) => {
    if (node === null) {
      return;
    }
    // compose the binary string for the next node
    const binary = `${str}${node.val}`;
    // when visiting a leaf, add binary string to the array
    if (!node.left && !node.right) {
      binaries.push(binary);
    }

    traverse(node.left, binary);
    traverse(node.right, binary);
  };

  traverse(root, "");

  return binaries.reduce((sum, binary) => {
    // add the sum from the binary conversion
    sum += parseInt(binary, 2);
    return sum;
  }, 0);
};

// Time: O(N) we will have to visit each node
// Space: O(H) where H is the tree height since we have to keep a recursion stack
