// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
//
// Basically, the deletion can be divided into two stages:
//
// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).
//
// Example:
//
// root = [5,3,6,2,4,null,7]
// key = 3
//
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Given key to delete is 3. So we find the node with value 3 and delete it.
//
// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
//
//     5
//    / \
//   4   6
//  /     \
// 2       7
//
// Another valid answer is [5,2,6,null,4,null,7].
//
//     5
//    / \
//   2   6
//    \   \
//     4   7

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val === key) {
    // case #1: no left
    if (!root.left) return root.right;
    // case #2: no right
    if (!root.right) return root.left;
    // case #3: we have left and right children
    // set a pointer
    let next = root.right;
    while (next.left) next = next.left;

    next.left = root.left;
    return root.right;
  }

  // our key is on the left
  if (root.val > key) root.left = deleteNode(root.left, key);
  // our key is on the right
  else if (root.val < key) root.right = deleteNode(root.right, key);

  // return the node
  return root;
};
