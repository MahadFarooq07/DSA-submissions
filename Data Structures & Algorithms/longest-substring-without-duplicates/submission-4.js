class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let Maxlen = 0
        let left = 0
        let map = new Map()

        for(let i = 0; i<s.length;i++){

            if(map.has(s[i]) && map.get(s[i]) >= left){
                left = map.get(s[i]) + 1
            }

            map.set(s[i],i)
            Maxlen = Math.max(Maxlen, i - left +1)
        }
        return Maxlen
    }
}
