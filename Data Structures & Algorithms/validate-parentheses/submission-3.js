class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(string) {
         const stack = []
    for(let i = 0; i <string.length; i++){
        const char = string[i]

        if(char === "(" || char === "[" || char === "{"){
            stack.push(char)
        } else if(char === ")" || char === "]" || char === "}"){
            if(stack.length === 0)
            return false
            const top = stack.pop()
        }


        if(
            char === ")" && top !=="(" ||
            char === "]" && top !=="["|| 
            char === "}"&& top !=="{"
        ){
            console.log(stack)
            return false
        }

    }
    return true
    }
}
