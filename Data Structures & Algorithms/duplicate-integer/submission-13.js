class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        console.log([...new Set (nums)].length)
        return nums.length === [...new Set (nums)].size()
    }
}
