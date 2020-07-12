// Reverse a singly linked list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
//
// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function (head) {
  let previousNode = null;

  // while the head node is not null
  while (head) {
    // temp var to hold the next node
    let nextNode = head.next;
    // set the next node to point to the previous node
    head.next = previousNode;
    // previous node is now equal to the head
    previousNode = head;
    // set the head now to the next node
    head = nextNode;
  }

  return previousNode;
};
