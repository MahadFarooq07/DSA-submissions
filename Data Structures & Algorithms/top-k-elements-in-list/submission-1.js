class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let duplicate = [...new Set(nums)]
        let map = {}

        for(let i = 0; i<nums.length;i++){
            if(!map.has(duplicate[i])){
                let number = 0
                map.push(duplicate[i],number)
            }else{
                map.set(duplicate[i],number++)
            }
        }

        return map
        
    }
}
