class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        const sorted = strs.map(s => s.split("").sort().join(""));
        for(let i = 0; i<strs.length;i++){
            if(!map.has(sorted[i])){
                map.set(sorted[i],[strs[i]])
            } else{
                map.get(sorted[i]).push(strs[i])
            }
        }
        return Array.from(map.values());
    }
}
