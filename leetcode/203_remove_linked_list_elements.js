// Remove all elements from a linked list of integers that have value val.
//
// Example:
//
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;

    let currentNode = new ListNode(-1);
    currentNode.next = head;
    head = currentNode;

    while (currentNode.next) {
        if (currentNode.next.val == val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head.next;
};
