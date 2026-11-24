class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(nums, h) {
        
        let left = 1
        let right = Math.max(...nums)
        nums = nums.sort((a,b) => a-b)
        let val = right 

        while(left <= right){
            let middle = Math.floor((left + right) /2)
            let time =0

            for(let n of nums){
                time += Math.ceil(n/middle)
            }

            if(time <= h){
                val = right
                right = middle -1
            } else{
                left = middle +1
            }
        }
        return val
        
    }
}