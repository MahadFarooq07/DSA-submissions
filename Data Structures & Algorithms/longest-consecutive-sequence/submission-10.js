class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(n) {
    let nums = [... new Set(n)]
    console.log(nums)
    nums.sort((a,b) => a - b)
    console.log(nums)
    
    let count = 0
    let seq = []
    for(let i = nums.length - 1; i>=0 ;i--){
        if(nums[i] === nums[i - 1] + 1){
            ++count
        } else{
            seq.push(count)
        }
        console.log(seq)

    }

    return seq.sort().at(-1)

    }
}
