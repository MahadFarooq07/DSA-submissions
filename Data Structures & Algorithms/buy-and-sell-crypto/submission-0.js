class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
        let max = 0
        for(let i = 0; i<prices.length;i++){
            for(let k = i + 1; k<prices.length;k++){
                if(prices[k]>prices[i]){
                    max = Math.max(max, prices[k]-prices[i])
                }
            }
        }

        return max
    }
}
