/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let array = [];
  let temp = head;

  // build our array
  while (temp) {
    array.push(temp);
    temp = temp.next;
  }

  // swap the kth from beginning and end of list, because our nodes will be a reference in the linked list
  [array[k - 1].val, array[array.length - k].val] = [
    array[array.length - k].val,
    array[k - 1].val,
  ];

  return head;
};

// Time: O(N) since we do a single pass through the linked list of N nodes
// Space: O(N) we store all the nodes in an array
