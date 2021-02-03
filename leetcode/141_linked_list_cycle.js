/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;

  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    // hare travels at two increments
    hare = hare.next.next;
    // tortoise travels at one increment
    tortoise = tortoise.next;

    // at one point they will intersect
    if(tortoise === hare) {
      return true;
    }
  }

  return false;
};

// The hare will run at a speed of ax where a is a constant and the tortoise will run at a speed of bx where b is a constant and a > b,
// at one point the will intersect
