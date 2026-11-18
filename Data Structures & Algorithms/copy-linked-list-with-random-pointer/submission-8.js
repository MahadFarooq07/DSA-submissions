// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
       let map = {null:null
        }

        let curr = head

        while(curr){
            let copy = new Node(curr.val)
            map[curr] = copy
            curr = curr.next
        }
        curr = head
        while(curr){
            copy = map[curr]
            copy.next = map[curr.next]
            copy.random = map[curr.random]
        }

        return copy

    }
}
