export class Matrix {

    /* Транспонирование матрицы */
    private static transpose (matrix: any[]) {
        let mat = [...matrix]
        const n = mat.length

        for (let i = 0, j = 0; i < n; i++) {
            j = i;
            while (j < n) {
                if (i !== j) {
                    const step = mat[i][j];
                    mat[i][j] = mat[j][i];
                    mat[j][i] = step;
                }
                j++;
            }
        }
        return mat
    }

    /* разворачивание строк */

    private static reverseRows(matrix: any[]) {
        let mat = [...matrix]
        const n = mat[0].length;
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                if (j%2===0) {
                    const step = mat[i][n - j - 1];
                    mat[i][n-j - 1] = mat[i][j]
                    mat[i][j] = step;
                }
    }


    static Rotate (matrix: any[]) {
        this.transpose(matrix) && this.reverseRows(matrix)
    }

}
