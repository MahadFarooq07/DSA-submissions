class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort()
        let left = 0

        for(let right = left + 1;right<nums.length;right++){

            if(nums[left]===nums[right]){
                return true
            } else{
                left++
            }

        }
        return false
    }
}
