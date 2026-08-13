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
            if(map.has(remainder)){
                return [value, ...map.get(remainder)]
            } else{
             map.set(remainder, value)   
            }
        }
    }
}
