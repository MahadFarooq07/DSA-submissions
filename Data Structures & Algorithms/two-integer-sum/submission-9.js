class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let value of nums){
            let remainder = target - value
            if(map.has(value)){
                return [value, map.get(value)]
            }
            map.set(value, remainder)
        }
    }
}
