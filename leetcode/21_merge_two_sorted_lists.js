// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // make a new linked list with a dummy node
  let dummy = new ListNode(-1);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      // currents next node is l1
      current.next = l1;
      // go onto the next node of the linked list
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    // go to the next curent node
    current = current.next;
  }

  // we will have one node remaining
  current.next = l1 || l2;

  // return the next of the temp node
  return dummy.next;
};

// Time: O(N)
// Space: O(1)
