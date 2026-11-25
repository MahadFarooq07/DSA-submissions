class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length -1 
        let max = 0

        while(left < right){
            
            if(heights[left] < heights[right]){
                max = Math.max(max, (right-left)*heights[left])
                left++
            } else{
                max = Math.max(max, (right-left)*heights[right])
                right--
            }
        }

        return max
    }
}
