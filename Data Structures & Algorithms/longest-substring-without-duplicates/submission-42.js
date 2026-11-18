class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map  = new Set()
        let max = 0
        let left = 0
        
        for(let right = 0; right<s.length; right++){

            while(map.has(s[right])){
                map.delete(s[left])
                max = Math.max(max, right-left)
                left++
            }

            map.add(s[right])
        }


        return max
    }
}