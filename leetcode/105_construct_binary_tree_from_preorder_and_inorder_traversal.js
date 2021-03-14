/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let build = (left, right) => {
    if (left > right) return null;

    // first element of the preorder array is always the root of the bst
    let val = preorder.shift();
    // find this index of this root in the inorder array
    let i = inorder.indexOf(val);
    let root = new TreeNode(val);
    // build our left of the root as everything up until this index in the inorder array is the left of the root
    root.left = build(left, i - 1);
    // build our right of the root as everything up until this index in the inorder array is the right of the root
    root.right = build(i + 1, right);

    return root;
  };

  // go through our inorder array
  return build(0, inorder.length - 1);
};

// Time: O(N)
// Space: O(N)
