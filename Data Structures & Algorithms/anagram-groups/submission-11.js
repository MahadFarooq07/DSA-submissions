class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

     let sorted = strs.map((str) => str.split("").sort().join(""))
    let map = {}

    for(let i = 0; i<strs.length;i++){
        if(!map[sorted[i]]){
            map[sorted[i]] = [strs[i]]
        //create bucket of that sortedword and the value pair would be those words
        }else{
            map[sorted[i]].push(strs[i])
        }
    }
    return (Object.values(map))
    }
}
