class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let output = [];
        let sorted = nums.sort((a, b) => a - b);

        for (let i = 0; i < sorted.length; i++) {
            
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sorted.length - 1;

            while(left<right){
                let target = -nums[i]

                if(target < sorted[left] + sorted[right]){
                    right--
                } else if(target > sorted[left] + sorted[right]){
                    left++
                } else{
                    output.push([sorted[i],sorted[left],sorted[right]])
                    left++
                    while(sorted[left]===nums[left-1] && left<right){
                        left++
                    }
                }

            }
        }

        return output;
    }
}