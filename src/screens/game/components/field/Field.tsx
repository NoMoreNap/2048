import React from 'react'
import {IField} from "../../../../interfaces/props.interface";
import {Box} from "@mui/material";
import {Background} from "./background/Background";
import {BackgroundCell} from "./background/BackgroundCell";
import {ICell} from "../../../../interfaces/objects.inteface";
import {PlayCell} from "./playground/cell";
import {cellsAction} from "../../logic/cells/cellsAction";


export const Field: React.FC<IField> = ({cells, isEdit, setCells, setIsEdit}) => {


    const cellAction = (el: ICell) => {
        const newCells = cellsAction(el, isEdit, cells);
        if (newCells !== undefined) {
            setCells(newCells)
            setIsEdit('null')
        }


    }


    return (
        <Box sx = {{width: 'fit-content', height: 'fit-content', position: 'relative', cursor: `${isEdit !== 'null' ? 'pointer' : ''}`}}>
            <Background >
                {
                    Array.from(Array(16)).map((_: any,i) =>
                        <BackgroundCell key={i}/>
                    )
                }
                {
                    cells.map((el: ICell) => <PlayCell onClick={() => cellAction(el)} key={el.id} {...el}/>)
                }

            </Background>

        </Box>
    )
}
