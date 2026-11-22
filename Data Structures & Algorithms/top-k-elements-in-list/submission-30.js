class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let output = []
        let map = new Map()
        for(let i = 0; i<nums.length;i++){
            output.push([])
        }

        for(const n of nums){
            map.set(n, (map.get(n) || 0) + 1)
        }

        for(const [index, freq] of map){
            output[freq].push(index)
        }
        let soln = []
        for(let walk = output.length -1; walk>=0;walk-- ){
            
            for(let n of output[walk]){
                soln.push(n)
            }

            if(soln.length ===k){
                return soln
            }

        }

        let sol = []

    }
}
