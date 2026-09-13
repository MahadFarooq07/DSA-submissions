class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Set()

        let left = 0
        let max = 0;


       for(let right = 0; right<s.length; right++){
        while(map.has(s[right])){
            map.delete(s[left])
            left++
        }
        map.add(s[right])
        max = Math.max(max, map.size)
       }

       return max
    }
}