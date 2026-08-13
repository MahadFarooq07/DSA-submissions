class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        console.log([...new Set(nums)])



        return new Set(nums).size != nums.length

}}

