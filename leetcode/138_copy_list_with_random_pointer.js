/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  const map = new Map();

  function copy(node) {
    if (!node) return null;
    // if we already processed this node, then return the cloned version of it
    if (map.get(node)) return map.get(node);

    // create a new node with the same value as the old node (copy the node)
    const n = new Node(node.val);
    // save this value in the hash map, this is needed because there might be loops in the traversal
    // due to the randomness of the pointers
    map.set(node, n);

    // recursively copy the remaining linked list starting once from the next pointer and then from the random pointer
    // we then update the next and random pointers for the new node created
    n.next = copy(node.next);
    n.random = copy(node.random);
    return n;
  }

  return copy(head);
}
