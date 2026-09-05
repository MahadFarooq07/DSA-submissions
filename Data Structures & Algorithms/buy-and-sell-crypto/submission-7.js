class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
    let max = 0
    let cheapest = prices[0]

    for(let i = 0; i < prices.length; i++){

        if(cheapest > prices[i]){
            cheapest = prices[i]
        }

        max = Math.max(max, prices[i] - cheapest)
    }

    return max
    
    
    }
}
