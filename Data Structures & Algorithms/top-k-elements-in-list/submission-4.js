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
                map[nums[i]] = map[nums[i]]++
            }
        }

        const sortedScores = Object.values(map).sort((a,b) => a-b)


    return Object.values(sortedScores).slice(0, nums)
    }
}