class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a,b) => a-b)
        let output = []
        
        for(let i = 0; i<nums.length;i++){

            if(i>0 && sorted[i]===sorted[i-1]){
                continue
                //This makes it so that if the elment is the same as for it doesn't do the "inner window" created that would also be a sol'n to the problem
            }

            let target = -nums[i]
            /// 
            let left = i + 1
            let right = nums.length - 1
        
            while(left < right){
                if((sorted[left]+sorted[right]) === target){
                    output.push([sorted[i],sorted[left],sorted[right]])
                    left++
                    while(sorted[left]===nums[left-1] && left<right){
                        left++
                        //skips the name number and makes sure it doesn't over do it because right still has to be bigger than left
                    }
                } else if((sorted[left]+sorted[right]) > target){
                    right--
                }else if((sorted[left]+sorted[right]) < target){
                    left++
                }
            }
        }  
        return output
    }
}
