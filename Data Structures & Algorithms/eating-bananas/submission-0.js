class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        if(piles.length === h){
            piles.sort()
            return piles[piles.length -1]
        }
    }
}
