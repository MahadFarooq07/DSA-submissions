class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) {
            return false;
        }

        const lastCol = matrix[0].length - 1;

        for (let i = 0; i < matrix.length; i++) {
            if (target >= matrix[i][0] && target <= matrix[i][lastCol]) {
                let left = 0;
                let right = lastCol;

                while (left <= right) {
                    const middleIndex = Math.floor((left + right) / 2);
                    const value = matrix[i][middleIndex];

                    if (target === value) {
                        return true;
                    }
                    if (target < value) {
                        right = middleIndex - 1;
                    } else {
                        left = middleIndex + 1;
                    }
                }
            }
        }

        return false;
    }
}