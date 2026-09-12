class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
        let left = 0
        let map = new Set()

        for(let right = 0; right<s.length;right++){
            while(map.has(s[right])){
                map.delete(s[left])
                left++
            }
            map.add(s[right])
            max = Math.max(max, right-left + 1)

        }
        return max
    
    }
}
