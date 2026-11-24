class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(nums, h) {
        
        let left = 1
        let right = Math.max(...nums)

        let val = right 

        while(left <= right){
            let middle = Math.floor((left + right) /2)
            let time =0

            for(let n of nums){
                time += Math.ceil(n/middle)
            }

            if(time <= h){
                val = middle
                right = middle -1
            } else{
                left = middle +1
            }
        }
        return val
        
    }
}