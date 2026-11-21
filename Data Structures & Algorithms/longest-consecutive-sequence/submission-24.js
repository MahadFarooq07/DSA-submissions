class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0
        let map = new Set(nums)

        for(let i = 0; i<nums.length; i++){
            let count = 0
            if(!map.has(nums[i]-1)){
                while(map.has(nums[i] + count)){
                    count +=1
                    max = Math.max(max, count)
                }
            }
                return max
        }

    }
}
