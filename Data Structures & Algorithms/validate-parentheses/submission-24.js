class Solution {
    isValid(s) {
        
        let stack = []

        let map = new Map([
            ["(",")"],
            ["[","]"],
            ["{","}"]
        ])

        for(let char of s){

            if(map.has(char)){
                stack.push(map.get(char))
            } else{
                if(char === stack.pop()){
                    return false
                }
            }
        }

        return stack.length === 0


    }
}
