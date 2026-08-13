class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const sol = []

        let prefix = 1

        for(let i = 0; i<nums.length;i++){
            sol[i] = prefix
            prefix *= nums[i]
        }
        let suffix = 1
        for(let k = nums.length - 1; k >=0;k--){
            sol[k] *= suffix
            suffix *= nums[k]
        }

        return sol
    }
}