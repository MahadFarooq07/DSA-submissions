class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
        let UniqueNums = new Set(nums)
        UniqueNums.sort((a, b) => a - b)
        for(let i=0; i<UniqueNums.size; i++){
            for(let k = 1 + i; k<UniqueNums.size; k++){
                if(UniqueNums[i] + 1 === UniqueNums[k]){
                    count++
                } else{
                    return count
                }
            }
        }
    }
}
