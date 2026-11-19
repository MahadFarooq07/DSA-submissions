class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let lowestDay = Infinity
        for(let i = 0; i<prices.length ; i++){
            if(prices[i]<lowestDay){
                lowestDay = prices[i]
                console.log(lowestDay)

            }
                profit = Math.max(profit, prices[i] - lowestDay)
        }

        return profit
    }
}
