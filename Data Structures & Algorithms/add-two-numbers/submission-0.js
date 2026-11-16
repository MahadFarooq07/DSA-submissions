/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode()

        while(l1 && l2){
            l1.val = l1.val + l2.val
            dummy.next = l1.tail
            l1 = l1.next
            l2 = l2.next
        }
        return dummy.next
    }
}
