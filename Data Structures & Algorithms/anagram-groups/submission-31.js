class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map  = {}

        let sorted = []

        for(let word of strs){
            sorted.push(word.split("").sort().join(""))
        }
        console.log(sorted)

        for(let i = 0; i < strs.length; i++){
            if(!map[sorted[i]]){
                map[sorted[i]] = [strs[i]]
            } else{
                map[sorted[i]].push(strs[i])
            }
        }

        return Object.values(map)
    }
}
