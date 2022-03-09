// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
//
//
//
// Example 1:
//
//
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:
//
//
// Input: head = [1,1,1,2,3]
// Output: [2,3]
//
//
// Constraints:
//
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
  let dummyNode = new ListNode(-1, head);
  // set our pointer
  let node = dummyNode;

  // while we haven't reached the end of the linked list
  while (node.next) {
    let nextNode = node.next.next;
    // if the next two nodes are duplicates
    if (nextNode && node.next.val === nextNode.val) {
      // grab the next-next node to point to
      let nonValNode = node.next.next.next;

      // until we don't have a duplicate
      while (nonValNode && nonValNode.val === node.next.val) {
        nonValNode = nonValNode.next;
      }

      // then move our pointer to this nonValNode which is not a duplicate
      node.next = nonValNode;
    } else {
      // if we don't have the duplicate just move our pointer
      node = node.next;
    }
  }

  return dummyNode.next;
};

// Time: O(N)
// Space; O(1)
