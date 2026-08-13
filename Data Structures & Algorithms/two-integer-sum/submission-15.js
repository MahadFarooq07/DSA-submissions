class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            let remainder = target - nums[i]

            if(map.has(remainder)){
                return [i, map.get(remainder)]
            } else{
             map.set(nums[i], i)   
            }
        }
    }
}
