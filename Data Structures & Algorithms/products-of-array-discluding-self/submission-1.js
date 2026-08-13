class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let sol=[]

        for(let i = 0; i<nums.length;i++){
            let answer = 1
            for(let k = 0;k<nums.length;k++){
                if(k!==i){
                    answer *= nums[k]
                }
            }
        sol.push(answer)
        }

        return sol
    }
}
