import {ICell} from "../interfaces/objects.inteface";

export class CellsEngine {
    cells: ICell[]
    cell: ICell
    constructor(cells: ICell[], cell: ICell) {
        this.cells = cells
        this.cell = cell
    }
    Delete() {
        return this.cells.filter(el => el.id !== this.cell.id)
    }

    UP(value: number) {
        return this.cells.map(el => {
            if (el.id === this.cell.id) {
                return {...el, value: el.value * value}
            } else {
                return el
            }
        })
    }
    Division(value: number) {
        return this.cells.map(el => {
            if (el.id === this.cell.id) {
                return {...el, value: el.value / value}
            } else {
                return el
            }
        })
    }


}
