class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        return s === s.split().reverse().join("")
    }
}
