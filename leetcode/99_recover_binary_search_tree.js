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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // always update the previous node
  let prev = null;
  let first = null;
  let second = null;

  // traverse our bst inorder (left -> node -> right)
  let traverse = (root) => {
    if (!root) return;

    // traverse our left tree
    traverse(root.left);

    // if our previous value is greater than our root.val
    if (prev && prev.val > root.val) {
      if (!first) first = prev; // set our first node only once, once the prev value is greater than teh root value
      // set our second to the root
      second = root;
    }
    // update our prev always to be the root
    prev = root;

    // traverse our right tree
    traverse(root.right);
  };

  traverse(root);

  // swap our mistakes
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};

// Time: O(N)
// Space: O(1) -> worst case (ON)
