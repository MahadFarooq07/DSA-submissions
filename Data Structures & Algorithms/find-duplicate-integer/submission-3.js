class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        
        let slow = 1
        let fast = 2

        while(nums[slow] != nums[fast]){
            if(nums[slow] == nums[fast]){
                break
            }
            slow += 1
            fast +=2
        }
        let slow2 =0
        while(nums[slow]!=nums[slow2]){
            slow2+=1
        }

        return slow2

    }
}
