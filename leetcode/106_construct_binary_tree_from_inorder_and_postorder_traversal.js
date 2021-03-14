/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let build = (left, right) => {
    if (left > right) return null;
    // the last value in the postorder array will always be the root
    let value = postorder.pop();
    let i = inorder.indexOf(value);
    let root = new TreeNode(value);
    root.right = build(i + 1, right);
    root.left = build (left, i - 1);

    return root;
  }

  return build(0, inorder.length - 1);
};

// Time: O(N) since we loop through every node of the entire binary search tree, with N being the # of nodes
// Space: O(N) since the recursive stack will contain N nodes
