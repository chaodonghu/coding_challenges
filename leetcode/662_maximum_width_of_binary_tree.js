// Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.
//
// The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.
//
// Example 1:
//
// Input:
//
//            1
//          /   \
//         3     2
//        / \     \
//       5   3     9
//
// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
// Example 2:
//
// Input:
//
//           1
//          /
//         3
//        / \
//       5   3
//
// Output: 2
// Explanation: The maximum width existing in the third level with the length 2 (5,3).
// Example 3:
//
// Input:
//
//           1
//          / \
//         3   2
//        /
//       5
//
// Output: 2
// Explanation: The maximum width existing in the second level with the length 2 (3,2).
// Example 4:
//
// Input:
//
//           1
//          / \
//         3   2
//        /     \
//       5       9
//      /         \
//     6           7
// Output: 8
// Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).


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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const queue = [{ node: root, position: 0}];
    let maxWidth = 0;

    while (queue.length) {
        const levelLength = queue.length;

        let min = Number.MAX_VALUE;
        let max = 0;

        for (let i = 0; i < levelLength; i++) {
            const current = queue.pop();

            min = Math.min(min, current.position);
            max = Math.max(max, current.position);

            if (current.node.left) {
                queue.unshift({ node: current.node.left, position: current.position * 2 + 1 });
            }

            if (current.node.right) {
                queue.unshift({ node: current.node.right, position: current.position * 2 + 2});
            }

            const levelWidth = levelLength === 1 ? 1 : max - min + 1;
            maxWidth = Math.max(maxWidth, levelWidth);
        }
    }

    return maxWidth;
};
