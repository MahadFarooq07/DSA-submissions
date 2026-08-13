class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let words = []
        for(let i = 0; i<strs.length; i++){
            words[i].push(strs[i])
            for(let k = i +1; k<strs.length;k++){
                if(strs[i].split("").sort().join("") === strs[k].split("").sort().join("")){
                    words[i].push(...strs[k])
                }
            }
    
        }
       
    return words
}}
