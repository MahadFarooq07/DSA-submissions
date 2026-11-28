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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        //Now slow is at the middle point

        let second = slow.next 
        slow.next = null
        //slow is no longer connected to the latter portion of the linkedlist
        let prev = null
        while(second){
            let next = second.next
            second.next = prev
            prev = second
            second = next
        }
        //now the second half of the list is created


        let first = head
        second = prev
        //again second is the longer of the 2 halves in case of odd length
        while(second){
            let tmp1 = first.next
            let tmp2 = second.next

            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2

        }



    }
}
