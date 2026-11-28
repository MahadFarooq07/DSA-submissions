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
            return false
        }

        let que = [root]
        let output = []

        while(que.length > 0){
            let k = que.length
            let curr = []
            for(let i = 0; i<k;i++){
                const node = que.shift()
                curr.push(node.val)

                if(node.left){
                    que.push(node.left)
                }
                
                if(node.right){
                    que.push(node.right)
                }
            }
            output.push(curr)

        }
        return output

    }
}
