class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map([
            ["(",")"],
            ["[","]"],
            ["{","}"]
        ])

        let output =[]

        for(let i =0;i<s.length;i++){
            if(map.has(s[i])){
                output.push(map.get(s[i]))
            }else{
                if(s[i] !== output.pop()){

                    //stack.pop() returns the last element
                    return false
                } 
            }
        }
        return output.length ===0 

    }
}
