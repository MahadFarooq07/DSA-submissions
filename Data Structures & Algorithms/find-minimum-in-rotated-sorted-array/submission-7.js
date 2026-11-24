class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length -1
        let max = Infinity
        while(left <= right){
            let middle = Math.floor((left + right)/2)
            max = Math.min(max, nums[middle])


            if(nums[left] < nums[middle]){
                left = middle + 1
                max = Math.min(max, nums[left])
            } else{
                right = middle -1
            }
        }
        return max
    }
}
