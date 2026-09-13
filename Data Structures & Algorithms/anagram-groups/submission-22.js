class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        let sorted = []
        for(let char of strs){
            sorted.push(char.split("").sort().join(""))
        }

        for(let i = 0; i<sorted.length; i++){
            if(!map[sorted[i]]){
                map[sorted[i]] = [strs[i]]
            } else{
                map[sorted[i]].push(strs[i])
            }
        }

        return Object.values(map)

    }
}
