class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let min = Infinity
        let right = nums.length -1

        while(left <= right){
            
            let middle = Math.floor((left + right)/2)

            if(nums[left] <= nums[middle]){
                if(min < nums[left] || min > nums[middle]){
                    right = middle - 1
                }else{
                    left = middle +1
            min = Math.min(min, nums[left])

                }
            }else{
                if(min > nums[right] || min < nums[middle]){
                    left = middle +1
                }else{
                    right = middle - 1
            min = Math.min(min, nums[right])
                }
            }
        }
        return min
    }
}
