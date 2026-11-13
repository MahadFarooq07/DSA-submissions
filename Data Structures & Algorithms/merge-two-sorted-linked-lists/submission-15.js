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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode()
        let tail = dummy
        
        while(list1 && list2){
            if(list1.val < list2.val){
                tail.next = list1
            } else{
                tail.next = list2
            }

        }
            tail = tail.next

        if(list1){
            tail.next =list1
        } else if(list2){
            tail.next = list2
        }

        return dummy

    }
}
