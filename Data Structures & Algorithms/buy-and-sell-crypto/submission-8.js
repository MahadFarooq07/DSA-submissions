class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let cheapestday = prices[0]

        for(let i =0; i<prices.length; i++){
            if(prices[i]<cheapestday){
                cheapestday=prices[i]
            }
            max = Math.max(max, prices[i]-cheapestday)
        }
        return max
    }
}
