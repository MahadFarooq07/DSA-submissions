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

        // make frequency hashmap

        let output = []
        for(let buckets = 0; buckets <= nums.length; buckets++){
            output.push([])
        }

        //create buckets for the amount of numbers there were (in the case there was 1 of each)

        for(const [num, freq] of map){
            output[freq].push(num)
        }

        //make the frequncy the index and the num the element

        let sub = []
        for(let walk = output.length - 1; walk>=0;walk--){
            for(const num of output[walk]){
                sub.push(num)
            }
            if(sub.length === k ){
                return sub
            }
        }

        //walk backwards as the most frequncy is the largest index

    }
}