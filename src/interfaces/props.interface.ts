import {ReactNode} from "react";
import {ICell} from "./objects.inteface";
import exp from "constants";

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



export interface ITopUser {
    score: number;
    vkid: number;
    photo: string;
    name: string;
}

export interface ITopUserRow extends ITopUser {
    position: number
}

export interface ITopUsersProps {
    users: ITopUser[]
}


