class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map()

        for(const words of strs){
            const key = words.split("").sort().join("")

            if(!map.has(key)){
                map.set(key,[])
            }

            map.get(key).push(words)
        }

        return [...map.values()]
    }
}
