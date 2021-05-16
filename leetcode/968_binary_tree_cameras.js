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
var minCameraCover = function (root) {
  // we have 4 states
  let leaf = 1;
  let covered = 2;
  let needsToBeCovered = 3;
  let hasCamera = 4;

  let cameras = 0;

  const util = (node) => {
    // if our node does not exist return back 0
    if (!node) return 0;
    // if the node does not have children then it is a leaf node
    if (!node.left && !node.right) return leaf;

    // do our dfs on on the left node and do our dfs on the right node
    let left = util(node.left);
    let right = util(node.right);

    // if our left or right nodes are leafs or needs to be covered then increment the cameras and return that the current node now has a camera
    if (
      left === leaf ||
      right === leaf ||
      left === needsToBeCovered ||
      right === needsToBeCovered
    ) {
      cameras++;
      return hasCamera;
    }

    // if our children has a camera then the current node is covered
    if (left === hasCamera || right === hasCamera) return covered;

    // if our children do not have a camera
    return needsToBeCovered;
  };

  let rootState = util(root);
  console.log('rootState', rootState);
  if (rootState === needsToBeCovered || rootState === leaf) {
    cameras++;
  }

  return cameras;
};
