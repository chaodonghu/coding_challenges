// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// Example 1:
//
// Input: 1->1->2
// Output: 1->2
// Example 2:
//
// Input: 1->1->2->3->3
// Output: 1->2->3

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
var deleteDuplicates = function(head) {
    let currentNode = head;

    while (currentNode && currentNode.next) {
        if (currentNode.next.val == currentNode.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head;
};
