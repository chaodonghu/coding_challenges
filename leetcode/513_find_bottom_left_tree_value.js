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


// dfs solution
var findBottomLeftValue = function (root) {
  // initialize max depth and bottom left value
  let maxDepth = -1;
  let bottomLeftValue = null;

  // initiate dfs
  var dfs = function (curr, depth) {
    if (curr === null) return;

    // if the current depth is greater than the max depth update all our values
    if (depth > maxDepth) {
      maxDepth = depth;
      bottomLeftValue = curr.val;
    }

    // continue the dfs on the left
    dfs(curr.left, depth + 1);
    // continue the dfs on the right
    dfs(curr.right, depth + 1);
  };

  dfs(root, 0);
  return bottomLeftValue;
};

// Time: O(N)
// Space: O(N)

// bfs solution
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
var findBottomLeftValue = function(root) {
    let arr = []
    let queue = [root];

    while (queue.length) {
        // get the first value in the queue
        let curr = queue.shift();
        arr.push(curr.val);

        // go level by level and push into the queue from right to left
        if (curr.right) {
            queue.push(curr.right);
        }

        if (curr.left) {
            queue.push(curr.left);
        }
    }

    // get the last value in the array
    return arr[arr.length - 1];
};