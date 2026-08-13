class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
     nums = [... new Set(nums)]
    let count = 0
    seq = []
    for(let i = nums.length - 1; i>=0 ;i--){
        if(nums[i] === nums[i - 1] + 1){
            count++
        } else{
            seq.push(count)
        }
    }

    return seq.sort().charAt(-1)

    }
}
