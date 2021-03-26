/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let serializedResult = [];
  function recurSerialize(node) {
    if (!node) {
      serializedResult.push(null);
      return;
    }

    serializedResult.push(node.val);
    recurSerialize(node.left);
    recurSerialize(node.right);
  }

  recurSerialize(root);

  return serializedResult.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // serializedArray acts like queue
  let serializedArray = data.split(",");

  function recurDeserialize(array) {
    if (!array[0]) {
      array.shift();
      return null;
    }

    let node = new TreeNode(array[0]);
    array.shift();
    node.left = recurDeserialize(array);
    node.right = recurDeserialize(array);
    return node;
  }

  return recurDeserialize(serializedArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
