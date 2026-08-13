class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort()
        let counter = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i] === counter){
                counter++
            } else{
                return counter
            }
        }
    }
}
