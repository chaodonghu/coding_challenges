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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let isMirror = (leftNode, rightNode) => {
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;

    return (
      leftNode.val === rightNode.val &&
      isMirror(leftNode.left, rightNode.right) &&
      isMirror(leftNode.right, rightNode.left)
    );
  };

  return isMirror(root, root);
};
