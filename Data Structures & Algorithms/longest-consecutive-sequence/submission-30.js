class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0
        let map = new Set(nums)
        
        for(let i = 0; i<nums.length;i++){
            let length = 1
            if(!map.has(nums[i] +1)){
                
                while(map.has(nums[i] - length)){
                    length += 1

                }
                max = Math.max(max, length)
            }
        }
        return max
    }
}
