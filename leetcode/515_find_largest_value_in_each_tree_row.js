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

// BFS
var largestValues = function (root) {
  if (!root) return [];

  let result = [];

  // initialize a queue for our BFS
  let queue = [root];

  // iterate until our queue is empty
  while (queue.length) {
    // initialize a small number to compare to
    let currMax = Number.MIN_SAFE_INTEGER;
    let currLevelSize = queue.length;

    // the current level size will be the number of nodes in the level
    for (let i = 0; i < currLevelSize; i++) {
      // get the first node off of the queue
      let node = queue.shift();

      currMax = Math.max(node.val, currMax);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currMax);
  }

  return result;
};

// Time: O(N), we visit each node in the tree once
// Space: O(N), all nodes will be eventually in the queue
