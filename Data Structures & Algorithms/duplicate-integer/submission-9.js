class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let Blue = [...new Set(nums)] 
        return Blue===nums
}}

