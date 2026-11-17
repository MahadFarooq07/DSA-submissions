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
        let curr = dummy
        let carry = 0
    
        while(l1 || l2 || carry){
            let v1
            let v2
            if(l1){
                v1 = l1.val
            } else{
                v1 = 0
            }

            if(l2){
                v2 = l2.val
            } else{
                v2 = 0
            }
            let value = v1 + v2 + carry
            carry = Math.floor(value/10)
            value = value%10

            let temp  = new ListNode(value)
            dummy.next = temp
            l1 = l1.next
            l2 = l2.next

        }
        return dummy.next
    }
}
