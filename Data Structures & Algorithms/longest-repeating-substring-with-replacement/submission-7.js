class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let max = 0
        let map = new Map()

        for (let i = 0; i < s.length; i++) {

            map.set(
                s[i],
                (map.get(s[i]) || 0) + 1
            )

            while (
                (i - left + 1) - Math.max(...map.values()) > k
            ) {
                map.set(
                    s[left],
                    map.get(s[left]) - 1
                )

                left++
            }

            max = Math.max(
                max,
                i - left + 1
            )
        }

        return max
    }
}