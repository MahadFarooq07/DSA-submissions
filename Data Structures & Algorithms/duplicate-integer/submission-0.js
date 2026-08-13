class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = 0
        for(let i = 0 ; i < nums.length; i++){
            for(let k = 1 + i; k < nums.length;k++ ){
                if(nums[i]===nums[k]){
                    return true
                } else{
                    count++
                }
            }
        }
        if(count>0){return false}
    }
}
