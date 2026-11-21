class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = 0;i<matrix.length;i++){
            for(let inner = 0; inner<matrix[i].length;inner++){
                if(matrix[i][inner] === target){
                    return true
                }
            }
        }

        return false
    }
}
