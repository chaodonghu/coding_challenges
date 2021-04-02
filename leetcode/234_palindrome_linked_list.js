// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(N) time and O(N) space solution with external array
var isPalindrome = function (head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    if (list[start] !== list[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

// O(N) time and O(1) space solution reversing second half of linked list and utilizing a slow/fast (tortoise and hare approach)
let isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverse(slow);

  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

let reverse = function (head) {
  let prevNode = null;

  while (head) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};
