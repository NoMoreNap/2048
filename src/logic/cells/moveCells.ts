import {coordType, ICell} from "../../interfaces/objects.inteface";
import {directions} from "../../configs/main.config";
import {Matrix} from "../../engine/Matrix";
import {cellStates} from "./cellsManager"

export const moveCells = (initCells: ICell[], direction: string) => {
    const cells: ICell[] = JSON.parse(JSON.stringify(initCells))

    const matrix: ICell[][] | number[][] | any = Array.from(new Array(4),() => Array.from(new Array(4), () => 0))

    cells.forEach((cell: ICell) => {
        matrix[cell.y][cell.x] = cell
    })

    rotateMatrixFromDirection(matrix,direction)
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if(matrix[y][x] === 0) continue
            moveCell(x,y,matrix)
        }
    }

    rotateMatrixToDirection(matrix,direction)

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if(matrix[y][x] === 0) continue
            matrix[y][x].y = y
            matrix[y][x].x = x
        }
    }



    cells.filter(cell => cell.killedBy !== undefined).forEach(cell => {
        cell.x = (cell.killedBy as ICell)?.x;
        cell.y = (cell.killedBy as ICell)?.y
        delete cell.killedBy
    })

    return cells


}
const moveCell = (x: number, y: number, matrix: ICell[][] | number[][]) => {

    let nextRow = y - 1
    let currentRow = y

    while (nextRow >= 0) {

        if (matrix[nextRow][x] === 0) {
            matrix[nextRow][x] = matrix[currentRow][x];
            (matrix[currentRow][x] as ICell).state = cellStates.MOVING
            matrix[currentRow][x] = 0

            currentRow = nextRow
        } else if (
            (matrix[nextRow][x] as ICell).value === (matrix[currentRow][x]as ICell).value
            &&
            ((matrix[nextRow][x] as ICell).state === cellStates.IDLE ||
                (matrix[nextRow][x] as ICell).state === cellStates.MOVING)
        ) {
            (matrix[nextRow][x] as ICell).state = cellStates.DYING;
            (matrix[nextRow][x] as ICell).killedBy = matrix[currentRow][x];
            (matrix[currentRow][x] as ICell).state = cellStates.INC
            matrix[nextRow][x] = matrix[currentRow][x]
            matrix[currentRow][x] = 0
            currentRow = nextRow

        } else  {
            break
        }
        nextRow--
    }

}

const rotateMatrixFromDirection = (matrix: ICell[][], direction: string) =>  {

    switch (direction) {
        case directions.LEFT:
            Matrix.Rotate(matrix)
            break;
        case directions.BOTTOM:
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            break;
        case directions.RIGHT:
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            break;
        default:
            break;
    }

}
const rotateMatrixToDirection = (matrix: ICell[][], direction: string) =>  {
    switch (direction) {
        case directions.LEFT:
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            break;
        case directions.BOTTOM:
            Matrix.Rotate(matrix)
            Matrix.Rotate(matrix)
            break;
        case directions.RIGHT:
            Matrix.Rotate(matrix)
            break;
        default:
            break;
    }

}


function printMatrix(matrix: any) {
    let printString = '[\n'

    Array.from(new Array(4), (x, i) => i).forEach(colNum => {
        printString += '  '
        printString += Array.from(new Array(4), (x, i) => i)
            .map(rowNum => JSON.stringify(matrix[colNum][rowNum].value ?? 0)
                //.padStart(40, ' ')
            )
            .join(', ')
        printString += ',\n'
    })

    printString += ']'
    console.log(printString)
}

