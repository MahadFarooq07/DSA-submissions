class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map  = new Set()
        let max = 0
        let left = 0
        let right = 0

        while(right!=s.length-1){
            if(!map.has(s[right])){
        
                right++
            } else{
                while(map.has(s[right])){
                    map.delete(s[left])
                    left++
                    max = Math.max(max, right-left)
                }
            }
        }
        return max
    }
}