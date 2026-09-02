class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
        let max = 0
        let cheapest = prices[0]

        for(let i = 0; i<prices.length;i++){
            if(prices[i]<cheapest){
                cheapest = prices[i]
            }
                let currentPrice = prices[i] - cheapest
                max = Math.max(max, currentPrice)
        }

        return max
    }
}
