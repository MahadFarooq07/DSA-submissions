class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0
        let UniqueNums = new Set(nums)
        
        for(let numbers of UniqueNums){
            if(!UniqueNums.has(numbers - 1)){
                let length = 1
                while(UniqueNums.has(numbers + length)){
                    length++
                }
                count = Math.max(count, length) //whats bigger the length of the sequence or 0 
            }
        }
        return count
    }
}
