class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Set()

        let left = 0
        let max = 0;

        for(let right = 0; right < s.length;right++){

            
            while(map.has(s[right])){
                map.delete(s[left])
                left++
            }
            max = Math.max(max, right-left + 1)
            map.add(s[right])
            

        }

        return max


    }
}