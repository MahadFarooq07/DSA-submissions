class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COLS = matrix[0].length

        let l = 0
        let r = ROWS*COLS - 1

        while(l<=r){
            let middle  = Math.floor((l+r)/2)
            let rows = Math.floor(middle/COLS)
            let cols = middle%COLS
        
            if(target < matrix[rows][cols]){
                l = middle + 1
            } else if(target > matrix[rows][cols]){
                r = middle -1
            } else{
                return true
            }


        }

        return false
    }
}
