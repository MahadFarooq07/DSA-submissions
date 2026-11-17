class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let map =  new Set()

        for(const number of nums){
            if(map.has(number)){
                return number
            } else{
                map.add(number)
            }
        }

        return 0
    }
}
