import {createCell} from "./cellsManager";

export const initCells = () => {
    const cell1 = createCell(randomCoord(),randomCoord(),2)
    const cell2 = createCell(randomCoord(),randomCoord(),Date.now() %2 === 0 ? 2 : 4)

    if (cell1.x === cell2.x && cell2.y === cell2.y) {
        cell1.x = cell1.x === 0 ? 1 : cell1.x - 1
    }

    return [cell1,cell2]

}

const randomCoord = () => {
    return Math.floor(Math.random()*3.9)
}



