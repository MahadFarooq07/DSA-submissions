class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let sorted = []
        for(let words of strs){
            let w = words.split("").sort("").join("")
            sorted.push(w)
        }
        for(let i = 0; i<strs.length; i++){
            if(!map.get(sorted[i])){
                map.set(sorted[i],[strs[i]])
            }else if(map.has(sorted[i])){
                map.get(sorted[i]).push(strs[i])
            }
        }

        return map.values()
    }
}
