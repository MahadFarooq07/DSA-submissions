/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return []
        }

        let que = [root]
        let output = []

        while(que.length > 0){
            const level = que.length
            const curr = []


        for(let i = 0; i<que.length;i++){
            const node = que.shift()
            curr.push(node.val) // so it runs checks this
            //Checking the node's left & right
            if(node.left){
                curr.push(node.left)
            }
            if(node.right){
                curr.push(node.right)
            }
        }
         output.push(curr)

        }
        return output
    }
}
