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
var averageOfSubtree = function (root) {
  // do a post-order traversal which explores the left subtree, the right subtree then the node itself

  let result = 0;

  const traverse = (node) => {
    if (!node) return [0, 0];

    // process the left subtree
    const [leftSum, leftCount] = traverse(node.left);
    // process the right subtree
    const [rightSum, rightCount] = traverse(node.right);

    // hold the current sum;
    const currSum = node.val + leftSum + rightSum;
    // hold the current count
    const currCount = 1 + leftCount + rightCount;

    // determine if the current sum and the current count equal the node val, we reached the root
    if (Math.floor(currSum / currCount) === node.val) {
      result++;
    }

    return [currSum, currCount];
  };

  traverse(root);

  return result;
};

// Time: O(N) we perform a single traversal through all the nodes in the tree, visiting each node once
// Space: O(H) where h is the height of the tree
