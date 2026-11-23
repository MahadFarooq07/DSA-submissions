class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []
        nums = nums.sort((a,b) => a-b)
        
        for(let i = 0 ; i<nums.length; i++){

            if(i>0&&(nums[i] ===nums[i-1])){
                continue
            }

        let left = i+1
        let right = nums.length -1


            while(left<right){
                if(nums[i] + nums[left] + nums[right] === 0){
                    output.push([nums[i],nums[left],nums[right]])
                    left++
                     while(nums[left]===nums[left -1] && right>left){
                        left++
                    }
                }else if(nums[i] + nums[left] + nums[right]<0){
                    left++
                }else{
                    right--
                }
            
            }
        }
        return output
    }
}
