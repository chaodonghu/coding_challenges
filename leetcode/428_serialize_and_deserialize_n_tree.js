/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    let serializedResult = [];

    function recurSerialize(node) {
      if (!node) return "";

      serializedResult.push(node.val);

      let childrenLength = node.children.length;
      // if the node has children then push the amount of children as the next element, then recursively call recur serialize on the
      if (childrenLength) {
        serializedResult.push(childrenLength);
        for (let i = 0; i < childrenLength; i++) {
          recurSerialize(node.children[i]);
        }
      } else {
        serializedResult.push(0);
      }
    }

    recurSerialize(root);

    return serializedResult.join(",");
  };

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    let index = 0;

    let string = data.split(",");

    function recurDeserialize(string) {
      if (!string.length) return;

      // our first index will be the node value
      let nodeVal = string[index];
      index++;

      // our second index will be the node's children
      let nodeChildLength = string[index];
      index++;

      let tree = new Node(nodeVal, []);
      for (let i = 0; i < nodeChildLength; i++) {
        tree.children.push(recurDeserialize(string));
      }

      return tree;
    }

    return recurDeserialize(string);
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));

// Time: O(N) with N being the number of nodes in our tree
// Space: O(N * C) with C being the maximum number of children
