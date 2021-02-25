/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let answer = 0;

  var recur = function (node) {
    if (!node) return 0;

    let left = recur(node.left);
    let right = recur(node.right);

    // if the node is either our p or q then our mid value is 1
    let mid = node === p || node === q ? 1 : 0;

    // if at any point the left, right or mid becomes truthy, we have found the lowest common ancestor for the nodes p and q
    if (mid + left + right > 1) {
      answer = node;
    }

    // return the first truthy value
    return mid || left || right;
  };

  recur(root);

  return answer;
};

// 1 -> 2 -> 4 -> 8
// Backtrack 8 -> 4
// 4 -> 9 (true, node === p)
// Backtrack 9 -> 4 -> 2
// 2 -> 5 -> 10
// Backtrack 10 -> 5
// 5 -> 11 (true, node === q)
// We found both the p and the q
// Backtrack 11 -> 5 -> 2

// Time Complexity: O(N) in the worst case we would traverse the entire tree and both p and q are the right most nodes
// Space: O(N)
