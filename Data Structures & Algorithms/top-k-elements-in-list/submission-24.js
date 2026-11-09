class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        // Fix 1: Properly increment on creation and update
        for(let i = 0; i < nums.length; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 1; // Start at 1 for the first occurrence
            } else {
                map[nums[i]] = map[nums[i]] + 1;
            }
        } // Fix 2: Added missing closing bracket for the loop

        let bucket = [];
        for(let i = 0; i < nums.length + 1; i++){
            bucket.push([]);
        }

        for(const key in map){
            // Fix 3: Convert string keys back to Numbers for LeetCode
            bucket[map[key]].push(Number(key)); 
        }

        let sol = [];

        for(let i = bucket.length - 1; i >= 0; i--){
            if(bucket[i].length > 0){
                // Fix 4: Loop through the bucket to handle cases where bucket size pushes sol.length past k
                for (const val of bucket[i]) {
                    sol.push(val);
                    if (sol.length === k) {
                        return sol;
                    }
                }
            }
        }
        return sol;
    }
}
