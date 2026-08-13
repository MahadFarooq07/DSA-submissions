class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []

        let map = {
            "(":")",
            "[":"]",
            "{":"}",
        }
        
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
