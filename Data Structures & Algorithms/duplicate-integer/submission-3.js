class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        for(let i = 0; i<nums.length; i++){
            for(let k = i +1; k < nums.length; i++){
                if(nums[i]===nums[k]){
                    return true
                }
            }
        }
    return false

}}

