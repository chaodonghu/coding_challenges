let depthFirstSearch = (n, k, rootVal) => {
  // if our subtree is one node then it is the value
  if (n === 1) {
    return rootVal;
  }

  // # of nodes in nth row
  let totalNodes = Math.pow(2, n - 1);

  // k is the target node in the nth row,
  // if k is greater than the middle then search the right
  // if k is less than the middle then search the left
  // Target node will be present in the right half sub-tree of the current root node.
  if (k > totalNodes / 2) {
    let nextRootVal = rootVal === 0 ? 1 : 0;
    return depthFirstSearch(n - 1, k - totalNodes / 2, nextRootVal);
  }
  // Otherwise, the target node is in the left sub-tree of the current root node.
  else {
    // next root value will be 0 if rootval is 0 or 1 since we are on the left of the sub-tree
    let nextRootVal = rootVal === 0 ? 0 : 1;
    return depthFirstSearch(n - 1, k, nextRootVal);
  }
};

let kthGrammar = function (n, k) {
  // root value starts at 0
  return depthFirstSearch(n, k, 0);
};


// Time: O(N)
// Space: O(N) // each recursive call will add a new frame to the stack until we reach the base case