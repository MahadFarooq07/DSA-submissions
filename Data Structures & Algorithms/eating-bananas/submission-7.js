class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let val
         = right // cause we are looking for anything below the max value

        while(left <= right){
            let time = 0
            let middle = Math.floor((left + right)/2)
            for(let i of piles){
                time += Math.ceil(i/middle)
            }

            if(time <= h){
                val = middle 
                right = middle -1
            }else{
                left = middle +1
            }
        }

        return val


    }
}
