// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
//
//
//
// Example 1:
//
//
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:
//
//
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false
// Example 3:
//
// Input: root = [2,1,3], k = 4
// Output: true
// Example 4:
//
// Input: root = [2,1,3], k = 1
// Output: false
// Example 5:
//
// Input: root = [2,1,3], k = 3
// Output: true
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [1, 104].
// -104 <= Node.val <= 104
// root is guaranteed to be a valid binary search tree.
// -105 <= k <= 105
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root) return false;
  // make a set to store all the values
  let set = new Set();

  // have a stack to pop out of
  let stack = [root];

  // BFS
  while (stack.length) {
    // pop off the stack
    let node = stack.pop();
    // if we have already seen the complement return true
    if (set.has(k - node.val)) return true;
    // add to our set the current value
    set.add(node.val);
    // search left
    if (node.left) stack.push(node.left);
    // search right
    if (node.right) stack.push(node.right);
  }
  return false;
};

// Time: O(N)
// Space: O(N)
