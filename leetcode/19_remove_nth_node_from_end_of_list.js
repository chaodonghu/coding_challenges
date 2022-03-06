// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // set a dummyNode, next pointer is set to the head of the list
  let dummyNode = new ListNode(-1, head);
  let leftPointer = dummyNode;
  let rightPointer = head;

  // set the rightPointer to the offset n, so it's always n nodes away from the leftPointer
  // do this with a loop
  while (n > 0 && rightPointer) {
    rightPointer = rightPointer.next;
    n -= 1;
  }

  // while our rightPointer isn't null, move our pointers next
  while (rightPointer) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }

  // delete the nth node by replacing the pointer
  leftPointer.next = leftPointer.next.next;

  // return the new linkedlist
  return dummyNode.next;
};

// Time: O(N)
// Space: O(1)
