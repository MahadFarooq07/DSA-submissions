class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let Hash = new Map()

        for(let i = 0; i<nums.length; i++){
            let remain = target-nums[i]
            if(Hash.has(remain)){
                return [Hash.get(remain),i]
            }

            Hash.set(remain, i)
        }
    }
}
