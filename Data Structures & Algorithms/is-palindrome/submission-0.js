class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        return s.join(" ").slice(0, -1).toLowerCase() === s.slice(0, -1).toLowerCase().reverse().join(" ")
    }
}
