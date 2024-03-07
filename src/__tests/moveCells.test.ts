import {moveCells} from "../logic";
import {createCell} from "../logic/cells/cellsManager";
import {ICell} from "../interfaces/objects.inteface";
import {directions} from "../configs/main.config";

const finalCells =
    {
        [directions.TOP]: {
            x: 1,
            y: 0,
            value: 2,
            id: 'test',
            //state: cellStates.MOVING,
        },
        [directions.BOTTOM]: {
            x: 1,
            y: 3,
            value: 2,
            id: 'test',
            //state: cellStates.MOVING,
        },
        [directions.LEFT]: {
            x: 0,
            y: 1,
            value: 2,
            id: 'test',
            //state: cellStates.MOVING,
        },
        [directions.RIGHT]: {
            x: 3,
            y: 1,
            value: 2,
            id: 'test',
            //state: cellStates.MOVING,
        },
    }

Object.keys(directions).forEach(direction => {

    describe(`move to ${direction}`, () => {
        it('move to top on 3 cells', () => {
            const initCells = [createCell(1,1,2,'test')]
            expect(moveCells(initCells, direction)).toEqual([
                finalCells[direction]
            ])
        })

        // it.only('move to top 2 cells on 3 cells', () => {
        //     const initCells = [createCell(3,2,2,'testID'), createCell(1,0,2,'testID')]
        //
        //     expect(moveCells(initCells, directions.TOP)).toEqual([{x: 0,y: 3, value: 2,id: 'testID'}, {x: 0,y: 1, value: 2,id: 'testID'}])
        // })
    })
})





export default null
