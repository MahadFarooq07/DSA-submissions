class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const sol = []
        let prefix = 1

        for(let i = 0; i<nums.length; i++){
            sol[i] = prefix
            prefix *=nums[i]
        }

        let suffix = 1

        for(let i = nums.length - 1; i>=0;i--){
            sol[i] *= suffix
            
            suffix *= nums[i] 
        }

        return sol

    }
}
