class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let max = Infinity
        while(l<=r){
            let middle = Math.floor((l+r)/2)
            max = Math.min(max, nums[middle])

            if(nums[l] <= nums[middle]){
                //Represents a accending sequence of numbers ^^
                max = Math.min(max, nums[l])
                l = middle + 1
            }else{
                r = middle - 1
            }
        }
        return max

    }
}
