class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        
        
            let left = 0
            let right = heights.length-1

            while(right!=left){
                if(heights[left]>heights[right]){
                  
                  max = Math.max(max, heights[right]*(right-left))
                
                  right--
                }else{
                    max = Math.max(max, heights[left]*(right-left))                
                    left++
                }
            }

            return max
        
    }
}
