import {ReactNode} from "react";
import {ICell} from "./objects.inteface";

export interface Props {
    children?: ReactNode
}

export interface IField {
    cells: ICell[],
    isEdit: boolean
    setIsEdit: (a: boolean) => void
    setCells: (a: ICell[]) => void,
    isLoading: boolean
}

export interface IScreenProvider extends Props{
    visible: boolean
}

export interface IBtnProps extends  Props {
    type?: string
    onClick?: (a: any) => any
}

export interface IActionsProps {
    setCells: (a: ICell[]) => void
    setScore: (a: number) => void
    setIsEdit: (a: boolean) => void
    isEdit: boolean
}

export interface IModal {
    type: string
}

export interface IModalContent {
    handleClose: () => void
}

export interface IModalStars {
    handleClose: () => void
    setPage: (a: string) => void
}

export interface ITask {
    award: number
    data:   {
        type: string,
        action: string,
        payload: any
    }
    id: number
    title: string
}

export interface IModalTasksBody {
    tasks: ITask[]
}
