class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let speed = 1

        while(true){
            let time = 0
            for(let ban of piles){
                time += Math.ceil(ban/speed)
            }
            if(time <=h){
                return speed
            }
            speed++
        }

    }
}
