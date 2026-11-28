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

        //find the middle of the list
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        //slow represents middle |--> Ending



        let second = slow.next
        //second represents the latter half after the middle node
        //Second would also be the bigger portion of the half (for odd numbers)
        slow.next = null
        //discounts the first half of the list from the second half
        let prev = null

        //Reverse the second half of the list
        while(second){
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        // Merge the two halfs

        let first = head
        second = prev

        while(second){
            let temp1 = first.next
            let temp2 = second.next
            
            first.next = second
            second.next = temp1
            first = temp1
            second = temp2
        }

        

    }
}
