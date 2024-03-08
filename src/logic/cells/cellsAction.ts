import {ICell} from "../../interfaces/objects.inteface";
import {CellsEngine} from "../../engine/Cells";

export const cellsAction = (cell: ICell, actionDirty: string, cells: ICell[]) =>  {

    const wrapperCells: ICell[] = JSON.parse(JSON.stringify(cells))
    const [action, value] = actionDirty.split('_')

    const Cells = new CellsEngine(wrapperCells,cell)



    switch (action) {
        case 'delete':
            return Cells.Delete()
        case 'up':
            return Cells.UP(Number(value))
        case 'division':
            return Cells.Division(Number(value))
        default:
            break
    }


}
