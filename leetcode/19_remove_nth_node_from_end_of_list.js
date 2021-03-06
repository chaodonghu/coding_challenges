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
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let firstPointer = dummyNode;
  let secondPointer = dummyNode;

  // move the first pointer to where n is (where we can the next to be cut off)
  for (let i = 0; i <= n; i++) {
    firstPointer = firstPointer.next;
  }

  // move both pointers until firstPointer is null
  while (firstPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  // make the cut where the second pointer should now point to the correct node
  secondPointer.next = secondPointer.next.next;

  // return our dummy node pointer.next
  return dummyNode.next;
};
