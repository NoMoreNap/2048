import {createCell} from "../screens/game/logic/cells/cellsManager";
const cellsToEquals =   [
    { x: 0, y: 0, value: 2, id: '123ix', state: "IDLE"},
    { x: 0, y: 1, value: 2, id: '123ix', state: "IDLE" },
    { x: 0, y: 2, value: 2, id: '123ix', state: "IDLE" },
    { x: 0, y: 3, value: 2, id: '123ix', state: "IDLE" },
    { x: 1, y: 0, value: 4, id: '123ix', state: "IDLE" },
    { x: 1, y: 1, value: 4, id: '123ix', state: "IDLE" },
    { x: 1, y: 2, value: 4, id: '123ix', state: "IDLE" },
    { x: 1, y: 3, value: 4, id: '123ix', state: "IDLE" },
    { x: 2, y: 0, value: 8, id: '123ix', state: "IDLE" },
    { x: 2, y: 1, value: 8, id: '123ix', state: "IDLE" },
    { x: 2, y: 2, value: 8, id: '123ix', state: "IDLE" },
    { x: 2, y: 3, value: 8, id: '123ix', state: "IDLE" },
    { x: 3, y: 0, value: 16, id: '123ix', state: "IDLE" },
    { x: 3, y: 1, value: 16, id: '123ix', state: "IDLE" },
    { x: 3, y: 2, value: 16, id: '123ix', state: "IDLE" },
    { x: 3, y: 3, value: 16, id: '123ix', state: "IDLE" }
]


it('create cell', () => {
    const initCells = []

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            initCells.push(createCell(i,j,2**(i+1),'123ix'))

        }

    }


    expect(initCells).toEqual(cellsToEquals)

})
export default null
