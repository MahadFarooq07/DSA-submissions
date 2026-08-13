class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 1
        let UniqueNums = [...new Set(nums)]
        UniqueNums.sort((a, b) => a - b)
        for(let i=0; i<UniqueNums.length; i++){
            for(let k = 1 + i; k<UniqueNums.length; k++){
                if(UniqueNums[i] + 1 === UniqueNums[k]){
                    count++
                }
            }
        }
        if(nums.length > 0){
            return 0
        } else{
            return count
        }
    }
}
