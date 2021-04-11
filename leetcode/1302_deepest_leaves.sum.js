// Given the root of a binary tree, return the sum of values of its deepest leaves.
//
//
// Example 1:
//
//
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:
//
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

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
var deepestLeavesSum = function (root) {
  let deepestSum = 0;
  let maxDepth = 0;
  let stack = [[root, 0]];

  while (stack.length > 0) {
    let [node, currDepth] = stack.pop();

    // if we reached a leaf node
    if (!node.left && !node.right) {
      // if the current depth of this leaf is greater than our global depth
      // reset our global max depth and deepest sum to this current node
      if (currDepth > maxDepth) {
        deepestSum = node.val;
        maxDepth = currDepth;
      }
      // we have reached the two deepest leaves so far
      else if (maxDepth === currDepth) {
        deepestSum += node.val;
      }
    } else {
      // we have children therefore go right then left, adding 1 to the current depth
      if (node.right) {
        stack.push([node.right, currDepth + 1]);
      }
      if (node.left) {
        stack.push([node.left, currDepth + 1]);
      }
    }
  }

  return deepestSum;
};

// Time: O(N) since we have to visit every node
// Space: O(H) to keep the stack, where H is the tree height

// Recursive
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  // instantiate a maxDepth and deepestSum variable
  let maxDepth = 0;
  let deepestSum = 0;
  const dfs = (node, depth) => {
    if (!node) return 0;

    // 1. Reset these variables if the current node's depth is greater than the maxDepth
    // 2. If the current node's depth is equal to the maxDepth then increase the deepestSum with the current node's value
    // 3. Continue with the recursive dfs if the current node's depth is less than the maxDepth

    if (depth > maxDepth) {
      maxDepth = depth;
      deepestSum = node.val;
    } else if (depth === maxDepth){
      deepestSum += node.val;
    }

    // increase our depth and call dfs on the left node and the right node
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 0);
  return deepestSum;
};

// Time: O(N)
// Space; O(1)
