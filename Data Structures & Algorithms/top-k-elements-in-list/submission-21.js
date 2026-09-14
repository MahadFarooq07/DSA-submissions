class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        let output = []
        for(let buckets = 0; buckets <= nums.length; buckets++){
            output.push([])
        }

        for(const [num, freq] of map){
            output[freq].push(num)
        }

        let sub = []
        for(let walk = output.length - 1; walk>=0;walk--){
            for(const num of output[walk]){
                sub.push(num)
            }
            if(sub.length === k ){
                return sub
            }
        }

    }
}