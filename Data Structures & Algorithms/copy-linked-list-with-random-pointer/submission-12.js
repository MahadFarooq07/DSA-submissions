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
       let map = new map()

        let curr = head
        let copy
        while(curr){
            copy = new Node(curr.val)
            //map[curr] = copy
            map.set(curr, copy)
            curr = curr.next
        }
        curr = head
        while(curr){
            copy = map.get(curr)
            copy.next = map.get(copy.next)
            copy.random = map.get(copy.random)
            curr = curr.next

        }

        return map.get(head)

    }
}
