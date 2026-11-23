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
            min = Math.min(min, nums[middle])

            if(nums[left] <= nums[middle]){

                //Represented a sorted list:
                if(nums[left] <= nums[middle]){
                    min = Math.min(min, nums[left])
                    left = middle + 1
                }
            }else{
                
                    right = middle - 1
                
            }
        }
        return min
    }
}
