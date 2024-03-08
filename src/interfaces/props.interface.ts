import {ReactNode} from "react";
import {ICell} from "./objects.inteface";

export interface Props {
    children?: ReactNode
}

export interface IField {
    cells: ICell[],
    isEdit: string
    setIsEdit: (a: string) => void
    setCells: (a: ICell[]) => void
}

