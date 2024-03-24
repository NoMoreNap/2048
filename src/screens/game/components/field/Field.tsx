import React from 'react'
import {IField} from "../../../../interfaces/props.interface";
import {Box} from "@mui/material";
import {Background} from "./background/Background";
import {BackgroundCell} from "./background/BackgroundCell";
import {ICell} from "../../../../interfaces/objects.inteface";
import {PlayCell} from "./playground/cell";
import {cellsAction} from "../../logic/cells/cellsAction";
import {CircularBox} from "../entity/CircularBox";
import {setter} from "elum-state/react";
import {EDITING_CELL} from "../../../../states/elum";


export const Field: React.FC<IField> = ({cells, isEdit, setCells, setIsEdit, isLoading}) => {


    const cellAction = (el: ICell) => {
        if(!isEdit) return
        setter(EDITING_CELL,(data) => ({id: el.id, isEditing: true,action: data.action}))
    }


    return (
        <Box sx = {{width: 'fit-content', height: 'fit-content', position: 'relative', cursor: `${!isEdit  ? 'pointer' : ''}`, touchAction: 'none'}}>
            <Background>
                {
                    Array.from(Array(16)).map((_: any,i) =>
                        <BackgroundCell key={`${i}_background_cell`}/>
                    )
                }
                {
                    cells.map((el: ICell) => <PlayCell onClick={() => cellAction(el)} key={`${el.id}_${el.value}_play_cell`} {...el} isEdit={isEdit}/>)
                }

            </Background>
            {isLoading &&
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.32)',
                    borderRadius: '5px',
                    top: 0,
                    zIndex: 3,
                    backdropFilter: 'blur(2px)'
                }}>
                    <CircularBox/>
                </Box>
            }

        </Box>
    )
}
