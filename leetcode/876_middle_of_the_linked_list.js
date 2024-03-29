// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
//
// If there are two middle nodes, return the second middle node.
//
//
//
// Example 1:
//
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:
//
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
//
//
// Note:
//
// The number of nodes in the given list will be between 1 and 100.
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
var middleNode = function (head) {
  let array = [head];
  while (array[array.length - 1].next != null)
    array.push(array[array.length - 1].next);
  return array[Math.trunc(array.length / 2)];
};

// Time: O(N) -> Go through every node once
// Space: O(N) -> Array is proportional to the number of nodes


// Two pointer approach with a slow and fast pointer
// Fast pointer will traverse twice as fast as the slow pointer, once the slow pointer reaches the end, we know that the slow pointer is in the middle
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Time: O(N) -> Go through every node once
// Space: O(1)
