/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let node = dummyNode;

  while (node.next) {
    // if the next value equals the next next value
    if (node.next.next && node.next.val === node.next.next.val) {
      let nonValNode = node.next.next.next;

      // keep going through linked list until we find the value where the current node does not equal the next next next value
      while (nonValNode && nonValNode.val === node.next.val) {
        nonValNode = nonValNode.next;
      }
      // finally set the next node to the non-equal value
      node.next = nonValNode;
    } else {
      // keep going and the nodes are distinct
      node = node.next;
    }
  }

  return dummyNode.next;
};
