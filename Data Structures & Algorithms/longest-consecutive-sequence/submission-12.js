class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = new Set(nums)
        let longest = 0

        let ans = 0
        let curr = 0
        for(let num of sorted){
            let streak = 0
            if(!sorted.has(num - 1)){
                while(sorted.has(num+1)){
                    streak++
                    curr++
                }
            ans = Math.max(curr, streak)
                }
            }
        
            return ans

        }
         
    }

