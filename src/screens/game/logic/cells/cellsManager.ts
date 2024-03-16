import md5 from 'md5'
import {ICell} from "../../../../interfaces/objects.inteface";

export const cellStates = {
    IDLE: "IDLE",
    MOVING: "MOVING",
    DYING: "DYING",
    INC: "INC"
}
export const createCell = (x: number, y: number, value: number, id: string = '') => ({
    x,y,value,
    id: id !== '' ? id : md5(String(Math.random()*100000>>0)),
    state: cellStates.IDLE
})

export const objectsEqual: any = (o1: any, o2: any) =>
    typeof o1 === 'object' && Object.keys(o1).length > 0
        ? Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
        : o1 === o2;

export const cellsEquals  = (firstCells: Array<ICell>, secondCells:Array<ICell>) =>
    firstCells.length === secondCells.length && firstCells.every((o, idx) => objectsEqual(o, secondCells[idx]));
