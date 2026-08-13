class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []

        let map = new Map([
            ["(", ")"],
            ["[", "]"],
            ["{", "}"]
        ]);
        
        for(let c of s){
            if(map.has(c)){
                stack.push(map.get(c))
            } else if(c !== stack.pop()){
                return false
            }
        }
        return true
    }
}
