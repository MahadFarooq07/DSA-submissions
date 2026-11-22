class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        let sorted = []
        for(let words of strs){
            let w = words.split().sort().join("")
            sorted.push(w)
        }
        for(let i = 0; i<strs.length; i++){
            if(!map[sorted[i]]){
                map[sorted[i]] = [strs[i]]
            }else if(map[sorted[i]]){
                map[sorted[i]].push(strs[i])
            }
        }

        return Object.values(map)
    }
}
