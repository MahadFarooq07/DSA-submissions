class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];
        let sorted = nums.sort((a, b) => a - b);

        for (let i = 0; i < sorted.length - 2; i++) {
            // skip duplicate values for i
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sorted.length - 1;

            while (left < right) {
                let sum = sorted[i] + sorted[left] + sorted[right];

                if (sum === 0) {
                    output.push([sorted[i], sorted[left], sorted[right]]);
                    left++;
                    right--;

                    // skip duplicates for left and right
                    while (left < right && sorted[left] === sorted[left - 1]) {
                        left++;
                    }
                    while (left < right && sorted[right] === sorted[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return output;
    }
}