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
            let currLevel = que.length
            let currRow = []

            for(let i = 0;i<currLevel;i++){
                let node = que.shift()
                currRow.push(node.val)
                if(node.right){
                    que.push(node.right)
                }
                
                if(node.left){
                    que.push(node.left)
                }

            }

        }
        return output
    }
}
