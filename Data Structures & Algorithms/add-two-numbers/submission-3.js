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
            if(l1){
                let v1 = l1.val
            l1 = l1.next
            } else{
                v1 = 0
            }

            if(l2){
                let v2 = l2.val
                l2 = l2.next
            } else{
                v2 = 0
            }
            //new digit
            let value = v1 + v2 + carry
            carry = val/10
            val = val %10

            curr.next = ListNode(val)

            curr = curr.next
        }

        return dummy.next

    }
}
