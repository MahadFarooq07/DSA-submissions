class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let sorted = []
        for(let char of strs){
            sorted.push(char.split("").sort().join(""))
        }

        for(let i = 0; i<sorted.length; i++){
            if(!map.has(sorted[i])){
                map.set(sorted[i],[strs[i]])
            } else{
                map.get(sorted[i]).push(strs[i])
            }
        }

        return [...map.values()]

    }
}
