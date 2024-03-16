import {ICell} from "../../../../interfaces/objects.inteface";
import {cellStates} from "./cellsManager";


export const removeAndIncrease = (cells: ICell[], setScope: (a: number) => void, score: number) => {
    return cells.filter((cell) => cell.state !== cellStates.DYING).map(cell => {
        if (cell.state === cellStates.INC) {
            cell.value *= 2
            setScope(score + cell.value)
        }
        cell.state = cellStates.IDLE
        return cell
    })

}
