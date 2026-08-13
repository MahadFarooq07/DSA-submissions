class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops) {
        let nums = []
        for(let i = 0; i<ops.length ; i++){
            if(!["C", "D", "+"].includes(ops[i])){
                nums.push(parseInt(ops[i]))
            } else if (ops[i]==="+"){
                let sum = 0
                    nums.forEach(num => sum += num)
                nums.push(sum)
            } else if(ops[i]==="D"){
                nums.push(nums.at(-1)*2)
            } else if(ops[i]==="C"){
                delete nums.at(-1)
            }
        }
        let blue = 0
        nums.forEach(num => blue += num)
        return blue
    }
}
