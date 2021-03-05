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
var averageOfLevels = function (root) {
  // instantiate the result array
  let result = [];
  if (!root) return result;

  // instantiate our queue for bfs
  let queue = [];
  // push the root into our queue
  queue.push(root);

  // while we have a queue
  while (queue.length) {
    // start our row
    let row = [];
    // our row size is the length of the queue
    let rowSize = queue.length;

    while (rowSize) {
      // take the first element in our queue
      let currentNode = queue.shift();

      // push the left and right nodes into our queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      // push the current node into our row
      row.push(currentNode.val);
      rowSize--;
    }

    // calculate the average after we have finished traversing the row
    let average = row.reduce((a, b) => a + b, 0) / row.length;
    result.push(average);
  }

  return result;
};

// Time: O(N) where N is the number of nodes in the binary tree
// Space: O(M) where the size of the queue grow up to the amount of nodes in each level of the binary tree, M refers to the maximum number of nodes at a given level
