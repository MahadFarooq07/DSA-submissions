class Solution {
    isValid(s) {
        let stack = [];

        let map = new Map(
            ["(",")"],
            ["[","]"],
            ["{","}"],
        )

        for(let char of s){
            stack.push(map.get(char))
            if(char === stack.pop()){
                return false
            }
        }

        return stack.length === 0

    }
}
