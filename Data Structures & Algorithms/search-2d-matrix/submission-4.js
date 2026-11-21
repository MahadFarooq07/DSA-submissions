class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left =0
        let right = matrix[0].length -1
        
        for(let i = 0;i<matrix.length;i++){
            if(target <= matrix[i][right] && target >= matrix[i][left]){
                let leftIndex = 0
                let rightIndex = matrix[i].length - 1

        while(left <= right){
            let middleIndex = Math.floor((left + right)/2)
            if(target===matrix[middleIndex]){
                return true
            }
            
            if(target<matrix[middleIndex]){
                right = middleIndex - 1
            } else{
                left = middleIndex + 1
            }
        }
            }
        }

        return false
    }
}
