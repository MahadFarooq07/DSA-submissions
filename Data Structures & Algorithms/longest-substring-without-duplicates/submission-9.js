class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            // If the character already exists in the set,
            // shrink the window from the left until it's removed
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            // Add the current character to the window
            charSet.add(s[r]);
            // Update the maximum length found so far
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}