class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let Hash = new Map()

        for(let i = 0; i < nums.length; i++){
            const remain = target - nums[i]
            if(Hash.has(remain)){
                return [Hash.get(remain),i]
            } 

            Hash.set(nums[i],i) // i is the key-value is the value part because thats the number we actually want to be returning
        }
        return []
    }
}
