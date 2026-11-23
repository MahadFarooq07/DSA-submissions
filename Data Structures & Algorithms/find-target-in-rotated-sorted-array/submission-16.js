class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0
        let right = nums.length - 1

        while(left <= right){
            let middle = Math.floor((left + right)/2)
            
            if(nums[middle]===target){
                return middle
            }
            
            //checking if its sorted
            if(nums[left] <= nums[middle]){
                //The "bad case" --> Representing out of bounds: Else representing the opperation thats good 
                if(target < nums[left] || target > nums[middle]){
                    left = middle + 1
                } else{
                    right = middle - 1
                }
            } else{
                if(target < nums[middle] || target > nums[right]){
                    right = middle - 1
                } else{
                    left = middle + 1
                }
            }
        }
        return -1
    }
}
