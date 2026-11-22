class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let output = []
        let map = new Map()

        for(let i = 0; i<=nums.length; i++){
            output.push([])
        }

        for(const number of nums){
            map.set(number, ((map.get(number)) || 0) + 1)
        }

        for(const [index, freq] of map){
            output[freq].push(index)
        }

        let soln = []

        for(let i = nums.length - 1; i>=0;i--){
            for(const num of output[i]){
                soln.push(num)

            }
            
            if(soln.length === k){
                return soln
            }
        }

        return soln
    }
}
