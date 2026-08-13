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
                map[nums[i]] = ++map[nums[i]]
            }
        }
        let bucket = []
        for(let i = 0; i<nums.length + 1;i++){
            bucket.push([])
        }

        for(const key of map){
            bucket[map[key]].push(key) /// [bucket[1] = "key" which is like 3]
        }

        let sol = []

        for(let i = bucket.length -1; i>=0;i--){
            if(bucket[i].length>0){
                sol = [...sol,bucket[i]]
                if(sol.length===k){
                    return sol
                }
            }
        }

    }
}