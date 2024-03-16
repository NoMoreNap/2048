import {ICell} from "../../../../interfaces/objects.inteface";
import {createCell} from "./cellsManager";

export  const newCell = (cells: ICell[]) => {
    const uniqueCoords = new Set()
    cells.forEach(cell => {
        uniqueCoords.add(cell.x * 4 + cell.y)
    })


    if (uniqueCoords.size === 16) return false

    let x: number, y: number
    const startSize = uniqueCoords.size
    //console.log(uniqueCoords.size)

    do {
        x = Math.floor(Math.random()* 3.9)
        y = Math.floor(Math.random()* 3.9)
        const sum = x*4 + y
        uniqueCoords.add(sum)
    } while (startSize === uniqueCoords.size)
    const newCells = [...cells, createCell(x,y,Date.now() %2 === 0 ? 2 : 4)]
    return newCells

}
