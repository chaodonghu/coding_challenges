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
 * @return {TreeNode}
 */

// if we do an inorder traversal we will get an in-order sequence of the BST
var increasingBST = function (root) {
  if (!root) return null;
  let dummy = new TreeNode(0);
  // set our pointer
  let curr = dummy;

  let traverse = (root) => {
    if (!root) return null;

    // go down all the way to the left of the BST
    if (root.left) {
      traverse(root.left);
      root.left = null;
    }

    // set our curr.right pointer to be the root since we will be at the beginning of our BST
    curr.right = root;
    // then set our pointer to the next node
    curr = curr.right;

    // after we traverse our root left, then traverse the root.right
    traverse(root.right)
  };

  traverse(root);
  return dummy.right;
};

// Time: O(N)
// Space: O(H)
