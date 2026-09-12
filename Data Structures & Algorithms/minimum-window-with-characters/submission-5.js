class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        
        let left = 0
        let right = 0
        let map = new Map()

        let minWindow=Infinity
        let subword = ""

        for(const char of t){
            map.set(char, (map.get(char) || 0)+1)
        }
        let count = map.size
        //frequcny of each char of t

        while(right < s.length){
            let rightPointer = s[right]
            if(map.has(rightPointer)){
                map.set(rightPointer, map.get(rightPointer)-1)
                if(map.get(rightPointer) === 0){
                    count--
                }
            }
                right++

                while(count === 0){
                    if(right - left < minWindow){
                        minWindow = right - left
                        subword = s.slice(left, right)
                    }
                    let leftPointer=s[left]
                    if(map.has(leftPointer)){
                        map.set(leftPointer, (map.get(leftPointer))+ 1)
                        if(map.get(leftPointer) > 0){
                            count++
                        }
                    }
                    left++
                }   
        }
        return subword

    }
}
