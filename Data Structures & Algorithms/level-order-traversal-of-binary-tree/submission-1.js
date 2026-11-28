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


        for(let i = 0; i<level;i++){
            const node = que.shift()
            curr.push(node.val) // so it runs checks this
            //Checking the node's left & right
            if(node.left){
                que.push(node.left)
            }
            if(node.right){
                que.push(node.right)
            }
        }
        //now you just filled out the que with the children of the node and will be chkecing that after, but for now put the value u jus searched from
         output.push(curr)

        }
        return output
    }
}
