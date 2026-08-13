class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        
        let answer = 1
        for(let i = 0; i<nums.length;i++){
            answer *= nums[i]
        }

        let sol = new Array(nums.length).fill(answer)
        let ans=[]

        for(let k = 0; k<nums.length;k++){
            if(sol[k]/nums[k]===false){
                ans.push(sol[k-1]*nums[k+1])
            } else{
                ans.push(sol[k]/nums[k])
            }

        }

        return ans
    }
}
