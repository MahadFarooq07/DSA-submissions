class Solution {
    isValid(s) {
        let stack = [];

        // Correctly creating a JavaScript Map
        let map = new Map([
            ["(", ")"],
            ["[", "]"],
            ["{", "}"]
        ]);
        
        for (let c of s) {
            if (map.has(c)) {      // This works now!
                stack.push(map.get(c)); // This works now!
            } else if (c !== stack.pop()) {
                return false;
            }
        }
        
        // BUG FIX: Ensure stack is empty at the end.
        return stack.length === 0;
    }
}
