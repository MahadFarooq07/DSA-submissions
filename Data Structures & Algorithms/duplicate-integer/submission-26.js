class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Set()
        for(let number of nums){
            if(map.has(number)){
            return true
            }
            map.add(number)
        }
        return false
    }
}
