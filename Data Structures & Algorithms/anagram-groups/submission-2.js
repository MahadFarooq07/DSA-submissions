class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let words = {}
        for(const s of strs){
            const sortedChar = s.split("").sort().join("")
            if(!words[sortedChar]){
                words[sortedChar] = [] //checking if this newly sorted oen is there
            }
            words[sortedChar].push(s)
        }

        return Obeject.values(words)
}}
