class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let words = []
        let result = strs.map(str => [...str]);

        for(let i = 0; i < result.length; i++){
            for(let k = i + 1; k < result.length; k++){
                if(result[i].sort().join("") === result[k].sort().join("")){
                    words.push(result[k])
                }
            }
        }

        return result
}}
