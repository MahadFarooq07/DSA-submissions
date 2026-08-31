class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let output = [];
        let sorted = nums.sort((a, b) => a - b);

        for(let i = 0; i<nums.length;i++){

                if(i>0 && sorted[i]===sorted[i -1]){
                    continue
                }
            let target = -nums[i]
            let left =  i + 1
            let right = nums.length - 1

            while(left < right){
                if(target < sorted[left]+sorted[right]){
                    right--
                } else if(target > sorted[left]+sorted[right]){
                    left++
                } else{
                    output.push([sorted[i],sorted[left],sorted[right]])
                    left++
                    while(sorted[left]===sorted[left -1] && right>left){
                        left++
                    }
                }
            }

        }

        return output
   }
}