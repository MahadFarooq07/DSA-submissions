class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}

        for(let i = 0; i< nums.length; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 1
            } else{
                map[nums[i]] = map[nums[i]] + 1
            }
        }
   return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((pair) => Number(pair[0]))
    }
}