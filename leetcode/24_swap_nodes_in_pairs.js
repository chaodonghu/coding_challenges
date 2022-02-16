// Given a linked list, swap every two adjacent nodes and return its head.
//
// You may not modify the values in the list's nodes. Only nodes itself may be changed.
//
//
//
// Example 1:
//
//
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
//
// Input: head = []
// Output: []
// Example 3:
//
// Input: head = [1]
// Output: [1]
//
//
// Constraints:
//
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100
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
var swapPairs = function (head) {
  // instantiate new list node at beginning of linked list
  head = new ListNode("dummy", head);
  // node pointer
  let node = head;

  // while we still have 3 nodes
  while (node && node.next && node.next.next) {
    let next1 = node.next;
    let next2 = next1.next;
    let next3 = next2.next;

    node.next = next2;
    next2.next = next1;
    next1.next = next3;
    // move the pointer to the next node
    node = next1;
  }

  // skip the dummy node
  return head.next;
};

// Time: O(N)
// Space: O(1)
