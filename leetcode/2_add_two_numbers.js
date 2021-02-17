// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//
//
// Example 1:
//
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:
//
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:
//
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
//
//
// Constraints:
//
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
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
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;

  // make a pointer
  let headPointer = new ListNode(-1);
  let head = headPointer;

  // instantiate our carry value
  let carry = 0;

  // while we have a p1 or p2 value
  while (p1 || p2) {
    let v1 = p1 && p1.val;
    let v2 = p2 && p2.val;
    // our current sum is the carry plus the v1 and v2
    let sum = carry + v1 + v2;

    // if our sum is greater than 9 then store our carry
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    // our next headPointer is the new list node modulo 10
    headPointer.next = new ListNode(sum % 10);
    // put our headPointer to point to this headPointer next
    headPointer = headPointer.next;
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  if (carry > 0) {
    headPointer.next = new ListNode(carry);
  }
  return head.next;
};

// Time Complexity: O(N) -> Go through both linked lists
// Space Complexity: O(N) -> N being the number of nodes in the linked list
