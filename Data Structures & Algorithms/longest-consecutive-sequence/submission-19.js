class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Set(nums)
        let max = 0

        for(let numbers of nums){
            let length = 1
            if(!map.has(numbers -1)){

            while(map.has(numbers + length)){
                length++
            }

            }
                max = Math.max(max, length)

        }

        return max

    }
}
