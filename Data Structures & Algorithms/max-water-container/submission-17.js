class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = nums.length -1 
        max = 0

        while(left <= right){
            
            if(heights[left] < heights[right]){
                max = Math.max(max, (right-left + 1)*heights[left])
            } else{
                max = Math.max(max, (right-left + 1)*heights[right])
            }
        }

        return max
    }
}
