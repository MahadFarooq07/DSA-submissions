class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i<nums.length; i++){
            let remain = target - nums[i]
            //3 = 7 -4
            if(map.has(remain)){
                return [map.get(remain), i]
            }
            map.set(nums[i], i)
        }

    }
}
