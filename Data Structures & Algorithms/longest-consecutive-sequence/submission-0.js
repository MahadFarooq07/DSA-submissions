class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
        nums.sort((a,b) => a-b)
        for(let i=0; i<nums.length; i++){
            for(let k = 1 + i; k<nums.length; k++){
                if(nums[i] + 1 === nums[k]){
                    count++
                } else{
                    return count
                }
            }
        }
    }
}
