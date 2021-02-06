// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//
// Example:
//
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:
//
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    // call a dfs with the node and the height
    const dfs = (node, h) => {
        if (!node) return;
        // replace the index of the height with the node's value
        res[h] = node.val;
        console.log('res', res);
        // need to still do dfs on left node due to a tree that is strictly decreasing
        dfs(node.left, h+1);
        dfs(node.right, h+1);
    }

    let res = [];
    dfs(root, 0);
    return res;
};
