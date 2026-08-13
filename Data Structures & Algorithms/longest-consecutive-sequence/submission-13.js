class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = new Set(nums)
        let longest = 0

        

        for(let num of sorted){

            
            if(!sorted.has(num - 1)){
                let length = 1
                while(sorted.has(num+length)){
                    streak++
                    length++
                }
                longest = Math.max(longest, length)
                }
            }
        
            return longest

        }
         
    }

