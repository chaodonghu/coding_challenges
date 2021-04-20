// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
//
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
//
//
//
// Example 1:
//
//
//
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
// Example 2:
//
//
//
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
//
//
// Constraints:
//
// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.
//
//
// Follow up: Recursive solution is trivial, could you do it iteratively?
//
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// Iterative
var preorder = function (root) {
  let output = [];
  if (!root) {
    return output;
  }
  // instantiate a stack with the root
  let stack = [root];


  // while we have nodes in our stack
  while (stack.length > 0) {
    // pop off the last element in the stack
    let el = stack.shift();
    // push this into our output
    output.push(el.val);
    // if our node has children, then iterate the children backwards
    if (el.children) {
      for (let i = el.children.length - 1; i >= 0; i--) {
        // push each child into the stack
        // this will go from left -> node -> right
        stack.push(el.children[i]);
      }
    }
  }

  return output;
};

// Time: O(N) since we visit each node
// Space; O(N) since we have a stack that consists of all the nodes

// Recursive
var preorder = function (root) {
  let output = [];
  if (!root) {
    return output;
  }

  var traverse = node => {
    if (!node) return output;
    output.push(node.val);
    for (let child of node.children) {
      traverse(child);
    }
    return output;
  }



  return traverse(root);
};
