import {moveCells} from "../logic";
import {cellStates, createCell} from "../logic/cells/cellsManager";
import {directions} from "../configs/main.config";

const finalCells =
    {
        [directions.TOP]: {
            x: 1,
            y: 0,
            value: 2,
            id: 'test',
            state: cellStates.MOVING,
        },
        [directions.BOTTOM]: {
            x: 1,
            y: 3,
            value: 2,
            id: 'test',
            state: cellStates.MOVING,
        },
        [directions.LEFT]: {
            x: 0,
            y: 1,
            value: 2,
            id: 'test',
            state: cellStates.MOVING,
        },
        [directions.RIGHT]: {
            x: 3,
            y: 1,
            value: 2,
            id: 'test',
            state: cellStates.MOVING,
        },
    }

Object.keys(directions).forEach(direction => {

    describe(`move`, () => {
        it(`move to ${direction}`, () => {
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

describe.only('inc cells',() => {
    it('2 cells', () => {
        const initCells = [createCell(0,0,2,'test'),createCell(1,0,2,'test')]

        expect(moveCells(initCells, directions.LEFT)).toEqual([
            {
                x: 0,
                y: 0,
                value: 2,
                id: 'test',
                state: cellStates.DYING
            },
            {
                x: 0,
                y: 0,
                value: 2,
                id: 'test',
                state: cellStates.INC
            }
        ])

    })

})





export default null
