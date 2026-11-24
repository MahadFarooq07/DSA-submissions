class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let max = Infinity
        while(l<r){
            let middle = Math.floor((l+r)/2)
            //if bigger than right
            if(nums[r] < nums[middle]){
                //Represents a accending sequence of numbers ^^
                l = middle + 1
            }else{
                r = middle
            }
        }
        return nums[l]

    }
}
