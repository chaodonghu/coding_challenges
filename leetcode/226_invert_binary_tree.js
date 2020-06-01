// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:
//
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
//
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
var invertTree = function(root) {
    if (root) {
        let tempLeft = root.left
        let tempRight = root.right
        root.left = tempRight
        root.right = tempLeft
        invertTree(root.left)
        invertTree(root.right)
    }

    return root;

};
