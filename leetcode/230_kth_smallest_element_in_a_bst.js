// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
//
//
//
// Example 1:
//
// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:
//
// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
//
//
//
// Constraints:
//
// The number of elements of the BST is between 1 to 10^4.
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

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
 * @param {number} k
 * @return {number}
 */

// the idea is to build an inorder traversal of BST which is an array sorted in ascending order
var kthSmallest = function (root, k) {
  let array = [];

  var dfs = function (node) {
    if (!node || array.length > k) {
      return;
    }

    // recursively call on the left most
    dfs(node.left);
    // push into the array starting from the left most element (smallest)
    array.push(node.val);
    dfs(node.right);
  };

  // call depth first search on the root first
  dfs(root);
  // return the kth element of the array (index starts at 0)
  return array[k - 1];
};

// Time: O(H) wtih H being the height of the tree
// Space: O(N) with N being the number of nodes in the tree in the worst case

// Iterative solution
var kthSmallest = function (root, k) {
  const stack = [];

  while (true) {
    // push our root into the stack until we reach the leaf nodes of our left subtree
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // take our last left tree which will be the lowest element in our subtree
    root = stack.pop();
    // decrement the k counter
    k -= 1;
    // if our k is at 0 then return the val
    if (!k) {
      return root.val;
    }
    // if not go to the right subtree
    root = root.right;
  }
};
