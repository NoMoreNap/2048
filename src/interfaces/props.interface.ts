import {ReactNode} from "react";
import {ICell} from "./objects.inteface";

export interface Props {
    children?: ReactNode
}

export interface IField {
    cells: ICell[]
}

