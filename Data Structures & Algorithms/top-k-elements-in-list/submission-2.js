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

        const sortedScores = Object.fromEntries(
  Object.entries(map).sort((a, b) => a[1] - b[1]) // Use b[1] - a[1] for descending
);


    return Object.values(sortedScores).slice(0, 2)
    }
}