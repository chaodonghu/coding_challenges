/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }

  // if we have a root left, then the next is simply the root.right
  if (root.left) root.left.next = root.right;
  // if we have a root.right and we have a root.next then our root.right.next is our next.left (one level down from the root)
  if (root.right && root.next) root.right.next = root.next.left;

  connect(root.left);
  connect(root.right);
  return root;
};

// Time: O(N) since we process each node exactly once
// Space: O(1)
