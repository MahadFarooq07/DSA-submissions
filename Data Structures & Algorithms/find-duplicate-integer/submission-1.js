class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        
        let slow = 0
        let fast = 0

        while(slow != fast){
            slow += 1
            fast +=2
            if(nums[slow] == nums[fast]){
                break
            }
        }
        let slow2 =0
        while(nums[slow]!==nums[slow2]){
            slow2++
        }

        return nums[nums[slow2]]

    }
}
