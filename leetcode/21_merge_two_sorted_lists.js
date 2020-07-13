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
var mergeTwoLists = function (l1, l2) {
  // instantiate new null node at beginning
  let newList = new ListNode(-1, null);
  let current = newList;

  // while l1 and l2 are not null
  while (l1 && l2) {
    // if the l1 value is greater than l2 then point the current next to the l2 value
    // increment l2 pointer
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    // l1 value is less than l2 value, point the current node to l2 value
    // increment l1 value
    } else {
      current.next = l1;
      l1 = l1.next;
    }

    // after logic, increment the current pointer
    current = current.next;
  }

  // finally either l1 or l2 should still exist, append the rest of that linked list to the end of the current list
  current.next = l1 || l2;

  return newList.next;
};
